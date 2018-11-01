<template>
  <b-card>
    <b-row>
      <b-col>
        <b-row class="align-items-center">
          <b-col cols="3">
            <span class="align-middle"><b>OUTBOUND</b></span>
          </b-col>
          <b-col>
            <b-row>
              <b-col><p><b>{{ flight.outbound.departureTime }} - {{ flight.outbound.arrivalTime }}</b></p></b-col>
              <b-col><p><b>{{ flight.outbound.stops.length }} stops</b></p></b-col>
              <b-col><p><b>{{ flight.outbound.duration | nearestQuarter }} hours</b></p></b-col>
            </b-row>
            <b-row>
              <b-col><p>{{ flight.outbound.airline }}</p></b-col>
              <b-col><p>{{ flight.outbound.stops.join(", ") }}</p></b-col>
              <b-col><p>{{ flight.outbound.from }} - {{ flight.outbound.to }}</p></b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr v-if="withReturn" />
        <b-row class="align-items-center" v-if="withReturn">
          <b-col cols="3">
            <span class="align-middle"><b>RETURN</b></span>
          </b-col>
          <b-col>
            <b-row>
              <b-col><p><b>{{ flight.return.departureTime }} - {{ flight.return.arrivalTime }}</b></p></b-col>
              <b-col><p><b>{{ flight.return.stops.length }} stops</b></p></b-col>
              <b-col><p><b>{{ flight.return.duration | nearestQuarter }} hours</b></p></b-col>
            </b-row>
            <b-row>
              <b-col><p>{{ flight.return.airline }}</p></b-col>
              <b-col><p>{{ flight.return.stops.join(", ") }}</p></b-col>
              <b-col><p>{{ flight.return.from }} - {{ flight.return.to }}</p></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="d-flex align-items-end flex-column">
        <h2 class="mb-auto">£{{ flight.price }}</h2>
        <b-button class="mt-3">Book Now!</b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    flight: Object
  },
  filters: {
    nearestQuarter: function (value) {
      return parseFloat((Math.round(value * 4) / 4).toFixed(2)).toString()
    }
  },
  computed: {
    withReturn: function () {
      return typeof this.flight.return !== 'undefined'
    }
  }
}
</script>

<style>
.d-flex > button {
  flex: 0 0 auto !important;
}
</style>
