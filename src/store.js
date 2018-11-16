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
      driversAge: 18
    }
  },
  mutations: {
    updateSearch (state, { from, to, outboundDate, returnDate, flightClass }) {
      state.flightSearch = { from, to, outboundDate, returnDate, flightClass }
    },
    updateCarSearch (state, { pickupDate, dropoffDate, pickupLocation, driverOver25, driversAge }) {
      state.carSearch = { pickupDate, dropoffDate, pickupLocation, driverOver25, driversAge }
    }
  },
  getters: {
    search: state => state.flightSearch,
    carsearch: state => state.carSearch
  }
})
