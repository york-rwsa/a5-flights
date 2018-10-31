<template>
  <b-row class="my-3">
    <b-col cols="3" class="my-4">
      <b-card title="Filter Results">
        <!-- <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block v-b-toggle.stopsCard variant="info">Stops</b-btn>
          </b-card-header>
          <b-collapse id="stopsCard" visible>
            <b-card>
              sup
            </b-card>
          </b-collapse>
        </b-card> -->
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
            <!-- <b-form-input v-model="maxTime" :min="minMaxTime" :max="maxMaxTime" type="range" /> -->
          </b-col>
        </b-row>

        <b-row class="align-items-center mt-5">
          <b-col>
            <label for="maxPrice" class="mb-0">Max Price</label>
          </b-col>
          <b-col>
            <!-- <span class="float-right">{{ maxTime }} hours</span> -->
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col>
            <vue-slider v-model="priceRange.value"
                        :min="priceRange.min"
                        :max="priceRange.max"
                        formatter="£{value}"
                        id="maxPrice"></vue-slider>
            <!-- <b-form-input v-model="maxTime" :min="minMaxTime" :max="maxMaxTime" type="range" /> -->
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
        :items="flights">
        <div slot="item" slot-scope="props">
        <flight-card class="my-4" :flight="props.item"></flight-card>

        </div>
      </v-data-iterator>
    </b-col>
  </b-row>
</template>

<script>
import moment from 'moment'
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
        { text: 'Easy Jet', value: 'easyjet' },
        { text: 'British Airways', value: 'ba' },
        { text: 'American Airlines', value: 'aa' },
        { text: 'Fly Be', value: 'flybe' },
        { text: 'Ryan Air', value: 'ryanair' }
      ],
      selectedAirlines: [],
      flights: []
    }
  },
  components: {
    FlightCard,
    vueSlider
  },
  computed: {
    airlineVals: function () {
      return this.airlines.map(x => x.value)
    }
  },
  methods: {
    genFlight: function (from, to, date, hourRange) {
      let flightpath = flighpaths[Math.floor(Math.random() * flighpaths.length)]
      let departureTime = Math.floor(Math.random() * (24)) + ':' + Math.floor(Math.random() * (60))
      let departureDateTime = moment(date + ' ' + departureTime)
      let flightTime = (Math.ceil((Math.random() * (hourRange.max - hourRange.min) + hourRange.min) * 20) / 20).toFixed(2)
      let arrivalDateTime = moment(departureDateTime).add(parseFloat(flightTime), 'hours')

      return {
        departureDateTime,
        arrivalDateTime,
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
      let search = {
        from: 'LAX',
        to: 'MAN',
        outboundDate: '2018-10-31',
        returnDate: '2018-11-15'
      }
      let hourRange = { min: 2, max: 22 }
      let withReturn = search.returnDate !== null

      let flights = []

      for (let i = 0; i < 12; i++) {
        flights.push({
          outbound: this.genFlight(search.from, search.to, search.outboundDate, hourRange),
          return: this.genFlight(search.from, search.to, search.returnDate, hourRange),
          price: Math.floor(Math.random() * (500 - 100) + 100)
        })
      }

      return flights
    }
  },
  mounted: function () {
    this.selectedAirlines = this.airlines.map(x => x.value)
    this.flights = this.genFlights()
  }
}
</script>
