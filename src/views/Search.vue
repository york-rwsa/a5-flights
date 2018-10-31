<template>
  <b-row class="my-3">
    <b-col cols="3"></b-col>
    <b-col>
      <flight-card class="my-4" v-for="i in 5" :key="i"></flight-card>
    </b-col>
  </b-row>
</template>

<script>
import FlightCard from '@/components/FlightCard'

export default {
  components: {
    FlightCard
  }
}
</script>
