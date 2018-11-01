import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flightSearch: {
      from: '',
      to: '',
      outboundDate: '',
      returnDate: null
    }
  },
  mutations: {
    updateSearch (state, { from, to, outboundDate, returnDate }) {
      state.flightSearch = { from, to, outboundDate, returnDate }
    }
  }
})
