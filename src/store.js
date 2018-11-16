import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flightSearch: {
      from: '',
      to: '',
      outboundDate: '',
      returnDate: '',
      flightClass: ''
    },
    carSearch: {
      driverOver25: true,
      pickupDate: '',
      dropoffDate: '',
      pickupLocation: '',
      ageOptions: '',
      driversAge: 18
    }
  },
  mutations: {
    updateSearch (state, { from, to, outboundDate, returnDate, flightClass }) {
      state.flightSearch = { from, to, outboundDate, returnDate, flightClass }
    }
  },
  getters: {
    search: state => state.flightSearch
  }
})
