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
    bookingMessage: ''
  },
  mutations: {
    updateSearch (state, { from, to, outboundDate, returnDate, flightClass }) {
      state.flightSearch = { from, to, outboundDate, returnDate, flightClass }
    },
    updateBookingMessage (state, payload) {
      state.bookingMessage = payload.message
    }
  },
  getters: {
    search: state => state.flightSearch,
    bookingMessage: state => state.bookingMessage
  }
})
