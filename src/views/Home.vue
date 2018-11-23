<template>
  <b-container>
    <b-row class="my-3">
      <b-col lg="8" offset-lg="2">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Flights" active>
              <flight-search></flight-search>
            </b-tab>
            <b-tab title="Car Rental">
              <car-search></car-search>
            </b-tab>
            <b-tab title="Hotels">
              <hotel-search></hotel-search>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col v-for="(deal, index) in deals" :key="index" cols="12" md="3" class="mt-4 mt-md-0">
        <deal-card :deal="deal"></deal-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FlightSearch from '@/components/FlightSearch'
import CarSearch from '@/components/CarSearch'
import HotelSearch from '@/components/HotelSearch'
import DealCard from '@/components/DealCard'

export default {
  data () {
    return {
      deals: [
        {
          title: '£100 for a week in Edinburgh',
          text: 'Full room and board with everything included amazing',
          img: require('@/assets/edinburgh.jpg')
        },
        {
          title: '£600 pp for a week in Majorca',
          text: 'Discover the magical island. Try some authentic meals, strong drinks, and good parties.',
          img: require('@/assets/majorca.jpg')
        },
        {
          title: '£250 ferry to Ireland',
          text: 'Drive around Ireland! Experience the joys of Irish weather. Gaze upon the beutiful coastline. Listen to neo-trad music.',
          img: require('@/assets/ireland.jpg')
        },
        {
          title: '£400 pp for a week in Thailand',
          text: 'Tour the amazing beaches of Thailand. Get to know the beautiful culture.',
          img: require('@/assets/thailand.jpg')
        }
      ]
    }
  },
  components: {
    FlightSearch,
    DealCard,
    CarSearch,
    HotelSearch
  }
}
</script>
