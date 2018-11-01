<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col cols="2"><b-form-select v-model="sortOption" :options="sortOptions"></b-form-select></b-col>
    </b-row>
    <b-row>
      <b-col cols="3" class="my-4">
        <b-card title="Filter Results">
          <b-row class="align-items-center my-3">
            <b-col>
              <label for="maxStops" class="mb-0">Max Stops</label>
            </b-col>
            <b-col>
              <b-form-select v-model="maxStops" :options="maxStopsOptions" />
            </b-col>
          </b-row>

          <b-row class="align-items-center mt-5 mb-1">
            <b-col>
              <label for="maxStops" class="mb-0">Max Time</label>
            </b-col>
            <b-col>
              <span class="float-right">{{ maxTime }} hours</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <vue-slider tooltip="false" v-model="maxTime" :min="minMaxTime" :max="maxMaxTime"></vue-slider>
            </b-col>
          </b-row>

          <b-row class="align-items-center mt-5">
            <b-col>
              <label for="maxPrice" class="mb-0">Max Price</label>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col>
              <vue-slider v-model="priceRange.value"
                          :min="priceRange.min"
                          :max="priceRange.max"
                          formatter="£{value}"
                          id="maxPrice"></vue-slider>
            </b-col>
          </b-row>

          <b-row class="mt-5 mb-2">
            <b-col>Airlines</b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-checkbox-group stacked :checked="airlineVals" v-model="selectedAirlines" name="airlines" :options="airlines">
              </b-form-checkbox-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <v-data-iterator
          :items="filteredFlights">
          <div slot="item" slot-scope="props">
          <flight-card class="my-4" :flight="props.item"></flight-card>

          </div>
        </v-data-iterator>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
import FlightCard from '@/components/FlightCard'
import vueSlider from 'vue-slider-component'
import flighpaths from '@/misc/flights.json'

export default {
  data () {
    return {
      priceRange: {
        value: [0, 1000],
        min: 0,
        max: 1000
      },
      maxTime: 23,
      maxMaxTime: 40,
      minMaxTime: 3,
      maxStops: 2,
      maxStopsOptions: [
        { value: 0, text: '0' },
        { value: 1, text: '1' },
        { value: 2, text: '2+' }
      ],
      airlines: [
      ],
      selectedAirlines: [],
      flights: [],
      sortOption: null,
      sortOptions: [
        { value: 'null', text: '---- Sort By ----' },
        { value: ['price', 'asc'], text: 'Lowest Price First' },
        { value: ['price', 'desc'], text: 'Highest Price First' },
        { value: [(item) => ((item.outbound.duration + (item.return || { duration: 0 }).duration) / 2), 'asc'], text: 'Quickest Flight' },
        { value: [(item) => (item.outbound.stops.length + (item.return || { stops: [] }).stops.length), 'asc'], text: 'Fewest Stops' }
      ]
    }
  },
  components: {
    FlightCard,
    vueSlider
  },
  computed: {
    airlineVals: function () {
      return this.airlines.map(x => x.value)
    },
    sortedList: function () {
      if (this.sortOption === null) {
        return this.flights
      } else {
        return _.orderBy(this.flights, this.sortOption[0], this.sortOption[1])
      }
    },
    filteredFlights: function () {
      return this.sortedList.filter((item) => {
        let dirs = ['outbound', 'return']
        for (let x = 0; x < 2; x++) {
          let flight = item[dirs[x]] || null
          if (flight == null) { continue }

          if (this.maxStops !== 2 && flight.stops.length > this.maxStops) { return false }
          if (flight.duration > this.maxTime) { return false }
          if (!this.selectedAirlines.includes(flight.airline)) { return false }
        }

        if (item.price > this.priceRange.value[1] || item.price < this.priceRange.value[0]) { return false }

        return true
      })
    }
  },
  methods: {
    genFlight: function (from, to, date, hourRange) {
      let flightpath = flighpaths[Math.floor(Math.random() * flighpaths.length)]
      let departureTime = (Math.floor(Math.random() * (24))).toString().padStart(2, '0') + ':' + Math.floor(Math.random() * (60)).toString().padStart(2, '0')
      let departureDateTime = moment(date + ' ' + departureTime)
      let flightTime = (Math.ceil((Math.random() * (hourRange.max - hourRange.min) + hourRange.min) * 20) / 20).toFixed(2)
      let arrivalDateTime = moment(departureDateTime).add(parseFloat(flightTime), 'hours')

      return {
        departureDateTime,
        arrivalDateTime,
        duration: moment.duration(arrivalDateTime.diff(departureDateTime)).asHours(),
        departureDate: departureDateTime.format('YYYY-MM-DD'),
        arrivalDate: arrivalDateTime.format('YYYY-MM-DD'),
        departureTime: departureDateTime.format('HH:MM'),
        arrivalTime: arrivalDateTime.format('HH:MM'),
        airline: flightpath.airline,
        stops: flightpath.stops,
        from,
        to
      }
    },
    genFlights: function () {
      // let search = {
      //   from: 'LAX',
      //   to: 'MAN',
      //   outboundDate: '2018-10-31',
      //   returnDate: '2018-11-15'
      // }
      let search = this.$store.state.flightSearch
      let hourRange = { min: 2, max: 22 }
      let withReturn = (search.returnDate !== null)

      let flights = []

      for (let i = 0; i < 30; i++) {
        let flight = {
          outbound: this.genFlight(search.from, search.to, search.outboundDate, hourRange),
          price: Math.floor(Math.random() * (500 - 100) + 100)
        }

        if (withReturn) {
          flight = { 
            ...flight,
            return: this.genFlight(search.to, search.from, search.returnDate, hourRange)
          }
        }

        flights.push(flight)
      }

      return flights
    }
  },
  mounted: function () {
    if (this.$store.state.flightSearch.outboundDate === "") {
      this.$router.push('/')
    }

    this.flights = this.genFlights()

    let airlines = new Set()
    this.flights.forEach(function(el) {
      airlines.add(el.outbound.airline)
      if (typeof el.return !== 'undefined') {
        airlines.add(el.return.airline)
      }
    })
    
    this.airlines = [...airlines]
    this.selectedAirlines = this.airlines
  }
}
</script>
