<template>
  <div>
    <b-btn v-b-modal="modalID">Details!</b-btn>
    <b-modal size="lg" :id="modalID" :ref="modalID" centered :title="'£' + flight.price + ' to ' + flight.outbound.to" ok-title="Book Now!" @ok="bookNow">
      <b-container fluid>
        <b-row>
          <b-col><h4>OUTBOUND</h4></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>Depart from {{ flight.outbound.from }} at {{ flight.outbound.departureTime }} on {{ flight.outbound.departureDate }}</p>
            <p>Flying {{ search.flightClass }} on {{ flight.outbound.airline }}</p>
          </b-col>
          <b-col>
            <p>Arrive at {{ flight.outbound.to }} at {{ flight.outbound.arrivalTime }} on {{ flight.outbound.arrivalDate }}</p>
          </b-col>
        </b-row>
        <div v-if="withReturn">
          <hr />
          <b-row>
            <b-col><h4>RETURN</h4></b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>Depart from {{ flight.return.from }} at {{ flight.return.departureTime }} on {{ flight.return.departureDate }}</p>
              <p>Flying {{ search.flightClass }} on {{ flight.return.airline }}</p>
            </b-col>
            <b-col>
              <p>Arrive at {{ flight.return.to }} at {{ flight.return.arrivalTime }} on {{ flight.return.arrivalDate }}</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    flight: Object,
    flightID: Number
  },
  computed: {
    modalID () {
      return 'details_modal_' + this.flightID
    },
    search () {
      return this.$store.getters.search
    },
    withReturn: function () {
      return typeof this.flight.return !== 'undefined'
    }
  },
  methods: {
    bookNow () {
      this.$refs[this.modalID].hide()
    }
  }
}
</script>

<style>

</style>
