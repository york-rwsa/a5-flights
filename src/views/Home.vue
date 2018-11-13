<template>
  <b-container>
    <b-row class="my-3">
      <b-col lg="8" offset-lg="2">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Flights" active>
              <flight-search></flight-search>
            </b-tab>
            <b-tab title="Hotels">
              not implemented
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-card title="£100 for a week in Edinburgh"
                :img-src="iconURL">
          <p class="card-text">
            Full room and board with everything included amazing
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="£100 for a week in Edinburgh"
                :img-src="iconURL">
          <p class="card-text">
            Full room and board with everything included amazing
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="£100 for a week in Edinburgh"
                :img-src="iconURL">
          <p class="card-text">
            Full room and board with everything included amazing
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="£100 for a week in Edinburgh"
                :img-src="iconURL">
          <p class="card-text">
            Full room and board with everything included amazing
          </p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FlightSearch from '@/components/FlightSearch'

export default {
  components: {
    FlightSearch
  },
  computed: {
    iconURL () {
      return require('@/assets/edinburgh.jpg')
    }
  }
}
</script>
