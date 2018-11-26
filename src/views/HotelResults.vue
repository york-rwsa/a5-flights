<template>
  <b-container>
    <b-row class="align-items-center mt-1">
      <b-col cols="12" md="6" offset-md="3">
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
              <!-- filters -->
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col>
        <v-data-iterator :items="hotels">
          <div slot="item" slot-scope="props">
            <hotel-card class="my-4" :hotel="props.item" :index="props.index"></hotel-card>
          </div>
        </v-data-iterator>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueSlider from 'vue-slider-component'
import HotelCard from '@/components/HotelCard.vue'

import moment from 'moment'
import _ from 'lodash'

export default {
  data () {
    return {
      sortOption: null,
      sortOptions: [
        { value: 'null', text: '---- Sort By ----' },
        { value: ['pricePerDay', 'asc'], text: 'Lowest Price First' },
        { value: ['pricePerDay', 'desc'], text: 'Highest Price First' },
        { value: ['seats', 'desc'], text: 'Most People' }
      ],
      hotels: [
        { name: 'Ibis Styles', stars: 4, pricePerDay: 180, image: require('@/assets/hotels/ibisStyles.webp'), reviews: 100, rating: 8.1 },
        { name: 'Plaza On The River', stars: 4, pricePerDay: 250, image: require('@/assets/hotels/plazaOnTheRiver.webp'), reviews: 150, rating: 7.6 },
        { name: 'Premier Inn', stars: 2, pricePerDay: 80, image: require('@/assets/hotels/premier.jpeg'), reviews: 171, rating: 6.7 },
        { name: 'The Savoy', stars: 5, pricePerDay: 480, image: require('@/assets/hotels/savoy.jpeg'), reviews: 302, rating: 8.5 },
        { name: 'Travel Lodge', stars: 3, pricePerDay: 120, image: require('@/assets/hotels/travelLodge.webp'), reviews: 98, rating: 3.5 } 
      ]
    }
  },
  computed: {
    search () {
      return this.$store.getters.carsearch
    }
  },
  components: {
    VueSlider,
    HotelCard
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
