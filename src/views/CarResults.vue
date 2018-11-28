<template>
  <b-container>
    <b-row class="align-items-center mt-1">
      <b-col cols="12" md="3" class="mb-2 mb-md-0">
        <b-btn block to="transport">View Public Transport Links</b-btn>
      </b-col>
      <b-col cols="12" md="6" >
        <b-card>
          <b-row>
            <b-col>
                Pickup from {{ search.pickupLocation }} on {{ search.pickupDate }}.
                Return on {{ search.dropoffDate }}
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="3" class="mt-2 mt-md-0"><b-form-select v-model="sortOption" :options="sortOptions"></b-form-select></b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="3" class="mt-4">
        <b-card no-body>
          <div slot="header" class="navbar navbar-light">
            <span class="navbar-brand">Filter Results</span>
            <b-btn class="navbar-toggler d-block d-sm-none" v-b-toggle.filterCollapse>
              <span class="navbar-toggler-icon"></span>
            </b-btn>
          </div>
          <b-collapse id="filterCollapse" ref="filterCollapse" class="dont-collapse-sm">
            <b-card-body>
              <b-row class="align-items-center">
                <b-col>
                  <label for="maxPrice" class="mb-0">Price</label>
                </b-col>
                <b-col>
                </b-col>
              </b-row>
              <b-row class="mt-5">
                <b-col>
                  <vue-slider v-model="filters.priceRange"
                              :min="0 * days"
                              :dotSize=25
                              :max="100 * days"
                              formatter="£{value}"
                              id="maxPrice"></vue-slider>
                </b-col>
              </b-row>
              <b-row class="align-items-center">
                <b-col>
                  <label for="seats" class="mb-0">Seats</label>
                </b-col>
                <b-col>
                </b-col>
              </b-row>
              <b-row class="mt-5">
                <b-col>
                  <vue-slider v-model="filters.seats"
                              :min="0"
                              :dotSize=25
                              :max="7"
                              id="seats"></vue-slider>
                </b-col>
              </b-row>
              <b-row class="mt-5 mb-2">
                <b-col>Car Class</b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-checkbox-group stacked v-model="filters.selectedClasses" name="airlines" :options="filters.classes">
                  </b-form-checkbox-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col>
        <v-data-iterator :items="filteredCars">
          <div slot="item" slot-scope="props">
            <car-card class="my-4" :car="props.item" :index="props.index" :days="days"></car-card>
          </div>
        </v-data-iterator>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarCard from '@/components/CarCard'
import VueSlider from 'vue-slider-component'

import moment from 'moment'
import _ from 'lodash'

export default {
  data () {
    return {
      cars: [
        { doors: 2, seats: 2, class: 'Luxury', car: 'Jaguar', image: require('@/assets/cars/Jaguar.png'), priceMul: 2 },
        { doors: 6, seats: 3, class: 'Van', car: 'Mercedes Sprinter', image: require('@/assets/cars/Mercedes_Sprinter.png'), priceMul: 2 },
        { doors: 5, seats: 5, class: 'Luxury 4x4', car: 'Range Rover', image: require('@/assets/cars/Range_Rover.png'), priceMul: 2.5 },
        { doors: 4, seats: 4, class: 'Small Mini', car: 'Toyota Aygo', image: require('@/assets/cars/Toyota_Aygo.png'), priceMul: 0.85 },
        { doors: 5, seats: 5, class: 'Economy', car: 'Vauxhall Corsa', image: require('@/assets/cars/Vauxhall_Corsa.png'), priceMul: 1 },
        { doors: 5, seats: 5, class: 'Business', car: 'Vauxhall Insignia', image: require('@/assets/cars/Vauxhall_Insignia.png'), priceMul: 1.5 },
        { doors: 5, seats: 7, class: 'Large MPV', car: 'Vauxhall Zafira', image: require('@/assets/cars/Vauxhall_Zafira.png'), priceMul: 1.5 }
      ],
      companies: [
        { reviews: 101, rating: 8.5, image: require('@/assets/cars/logos/alamo_logo.gif') },
        { reviews: 150, rating: 7.6, image: require('@/assets/cars/logos/autovia_logo.gif') },
        { reviews: 759, rating: 5.4, image: require('@/assets/cars/logos/europcar_logo.gif') },
        { reviews: 750, rating: 7.5, image: require('@/assets/cars/logos/hertz_logo.gif') },
        { reviews: 140, rating: 8.0, image: require('@/assets/cars/logos/sixt_logo.gif') },
        { reviews: 300, rating: 8.3, image: require('@/assets/cars/logos/winrent_logo.gif') }
      ],
      priceMin: 10,
      priceMax: 40,
      sortOption: null,
      sortOptions: [
        { value: 'null', text: '---- Sort By ----' },
        { value: ['pricePerDay', 'asc'], text: 'Lowest Price First' },
        { value: ['pricePerDay', 'desc'], text: 'Highest Price First' },
        { value: ['seats', 'desc'], text: 'Most People' }
      ],
      filters: {
        priceRange: [0, 100 * 2],
        seats: [0, 7],
        selectedClasses: [],
        classes: []
      }
    }
  },
  computed: {
    carWithTransmissionAndPrice () {
      return this.cars.map((car) => {
        car.pricePerDay = (Math.random() * (this.priceMax - this.priceMin) + this.priceMin) * car.priceMul
        car.company = _.sample(this.companies)

        let newcar = []
        newcar.push({ ...car, transmission: 'automatic' })
        newcar[0].pricePerDay = newcar[0].pricePerDay * 1.05

        newcar.push({ ...car, transmission: 'manual' })
        return newcar
      }).flat()
    },
    sortedCars () {
      if (this.sortOption === null) {
        return this.carWithTransmissionAndPrice
      } else {
        return _.orderBy(this.carWithTransmissionAndPrice, this.sortOption[0], this.sortOption[1])
      }
    },
    filteredCars () {
      return this.sortedCars.filter((item) => {
        if (item.pricePerDay * this.days > this.filters.priceRange[1] || item.pricePerDay * this.days < this.filters.priceRange[0]) {
          return false
        }

        if (item.seats > this.filters.seats[1] || item.seats < this.filters.seats[0]) {
          return false
        }

        if (!this.filters.selectedClasses.includes(item.class)) {
          return false
        }

        return true
      })
    },
    search () {
      return this.$store.getters.carsearch
    },
    days () {
      if (this.search.pickupDate === '') {
        return 1
      }
      return moment(this.search.dropoffDate).diff(moment(this.search.pickupDate), 'days')
    }
  },
  components: {
    CarCard,
    VueSlider
  },
  mounted () {
    this.filters.classes = [...(new Set(this.cars.map(o => o.class)))]
    this.filters.selectedClasses = this.filters.classes
    this.filters.priceRange[1] = this.priceMax * 2.5 * this.days
  }
}
</script>

<style>
@media (min-width: 768px) {
  .collapse.dont-collapse-sm {
    display: block !important;
    height: auto !important;
    visibility: visible;
  }
}
</style>
