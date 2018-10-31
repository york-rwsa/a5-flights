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
      <flight-card class="my-4" v-for="i in 5" :key="i"></flight-card>
    </b-col>
  </b-row>
</template>

<script>
import FlightCard from '@/components/FlightCard'
import vueSlider from 'vue-slider-component'

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
        {text: 'Easy Jet', value: 'easyjet'},
        {text: 'British Airways', value: 'ba'},
        {text: 'American Airlines', value: 'aa'},
        {text: 'Fly Be', value: 'flybe'},
        {text: 'Ryan Air', value: 'ryanair'}
      ],
      selectedAirlines: []
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
  mounted: function () {
    this.selectedAirlines = this.airlines.map(x => x.value)
  }
}
</script>
