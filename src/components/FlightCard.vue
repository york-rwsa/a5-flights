<template>
  <b-card>
    <div v-if="flight.deal" class="ribbon">
      <span>Mega Deal</span>
    </div>
    <b-row>
      <b-col cols="12" md="10">
        <b-row class="align-items-center">
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
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
              <b-col><p>{{ flight.outbound.from | airportCode }} - {{ flight.outbound.to | airportCode }}</p></b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr v-if="withReturn" />
        <b-row class="align-items-center" v-if="withReturn">
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
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
              <b-col><p>{{ flight.return.from | airportCode }} - {{ flight.return.to | airportCode }}</p></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="2" class="d-flex align-items-end flex-column">
        <h2 class="mb-auto">£{{ flight.price }}</h2>
        <flight-details-modal :flightID="index" :flight="flight" class="mt-3"></flight-details-modal>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import FlightDetailsModal from '@/components/FlightDetailsModal'
import { airportCode } from '@/components/mixins/airportCode.js'

export default {
  mixins: [airportCode],
  props: {
    flight: Object,
    index: Number
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
  },
  components: {
    FlightDetailsModal
  }
}
</script>

<style>
.d-flex > button {
  flex: 0 0 auto !important;
}

.ribbon {
   position: absolute;
   left: -5px; top: -5px;
   z-index: 1;
   overflow: hidden;
   width: 75px; height: 75px;
   text-align: left;
}
.ribbon span {
   font-size: 10px;
   color: #fff;
   text-transform: uppercase;
   text-align: center;
   font-weight: bold; line-height: 20px;
   transform: rotate(-45deg);
   width: 100px; display: block;
   background: #79A70A;
   background: linear-gradient(#F70505 0%, #8F0808 100%);
   box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
   position: absolute;
   top: 19px; left: -21px;
}
.ribbon span::before {
   content: '';
   position: absolute;
   left: 0px; top: 100%;
   z-index: -1;
   border-left: 3px solid #8F0808;
   border-right: 3px solid transparent;
   border-bottom: 3px solid transparent;
   border-top: 3px solid #8F0808;
}
.ribbon span::after {
   content: '';
   position: absolute;
   right: 0%; top: 100%;
   z-index: -1;
   border-right: 3px solid #8F0808;
   border-left: 3px solid transparent;
   border-bottom: 3px solid transparent;
   border-top: 3px solid #8F0808;
}
</style>
