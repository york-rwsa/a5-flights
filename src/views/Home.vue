<template>
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
</template>

<script>
import FlightSearch from '@/components/FlightSearch'

export default {
  components: {
    FlightSearch
  }
}
</script>
