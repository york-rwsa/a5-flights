<template>
  <b-container>
    <b-row class="align-items-center mt-1">
      <b-col cols="12" md="6" offset-md="3">
        <b-card>
          <b-row>
            <b-col>
              deets bro
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- <b-col cols="12" md="2" class="mt-2 mt-md-0"><b-form-select v-model="sortOption" :options="sortOptions"></b-form-select></b-col> -->
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

            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col>
        <v-data-iterator :items="carWithTransmission">
          <div slot="item" slot-scope="props">
            <car-card class="my-4" :car="props.item" :index="props.index"></car-card>
          </div>
        </v-data-iterator>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarCard from '@/components/CarCard'

export default {
  data () {
    return {
      cars: [
        { seats: 2, class: 'Luxury', car: 'Jaguar', image: require('@/assets/cars/Jaguar.png') },
        { seats: 3, class: 'Van', car: 'Mercedes Sprinter', image: require('@/assets/cars/Mercedes_Sprinter.png') },
        { seats: 5, class: 'Luxury 4x4', car: 'Range Rover', image: require('@/assets/cars/Range_Rover.png') },
        { seats: 4, class: 'Small Mini', car: 'Toyota Aygo', image: require('@/assets/cars/Toyota_Aygo.png') },
        { seats: 5, class: 'Economy', car: 'Vauxhall Corsa', image: require('@/assets/cars/Vauxhall_Corsa.png') },
        { seats: 5, class: 'Business', car: 'Vauxhall Insignia', image: require('@/assets/cars/Vauxhall_Insignia.png') },
        { seats: 7, class: 'Large MPV', car: 'Vauxhall Zafira', image: require('@/assets/cars/Vauxhall_Zafira.png') }
      ]
    }
  },
  computed: {
    carWithTransmission () {
      return this.cars.map((car) => {
        let newcar = []
        newcar.push({ ...car, transmission: 'automatic' })
        newcar.push({ ...car, transmission: 'manual' })
        return newcar
      }).flat()
    }
  },
  components: {
    CarCard
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
