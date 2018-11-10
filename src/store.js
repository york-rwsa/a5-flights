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
    }
  },
  mutations: {
    updateSearch (state, { from, to, outboundDate, returnDate, flightClass }) {
      state.flightSearch = { from, to, outboundDate, returnDate, flightClass }
    }
  },
  getters: {
    search: state => {
      return state.flightSearch
    }
  }
})
