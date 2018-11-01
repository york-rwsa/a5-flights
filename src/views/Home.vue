<template>
  <b-row class="my-3">
    <b-col></b-col>
    <b-col cols="8">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Flights" active>
            <b-form @submit="searchNow">
              <b-row class="mb-4">
                <b-col>
                  <b-row class="align-items-center">
                    <b-col><label for="from">From</label></b-col>
                    <b-col cols="8"><b-form-input v-model="from" id="from" type="text" required placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row class="align-items-center">
                    <b-col><label for="from">Outbound Date</label></b-col>
                    <b-col cols="7"><b-form-input type="date" v-model="outboundDate"></b-form-input></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="my-4">
                <b-col>
                  <b-row class="align-items-center">
                    <b-col><label for="from">To</label></b-col>
                    <b-col cols="8"><b-form-input v-model="to" id="from" type="text" required placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row v-if="addReturn" class="align-items-center">
                    <b-col><label for="from">Return Date</label></b-col>
                    <b-col cols="7"><b-form-input type="date" v-model="returnDate"></b-form-input></b-col>
                  </b-row>
                  <b-row v-if="!addReturn" class="align-items-center">
                    <b-col></b-col>
                    <b-col>
                      <b-button class="" @click="addReturnDate">Add Return</b-button>
                    </b-col>
                    <b-col></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col>
                  <b-input-group prepend="Adults: ">
                    <b-form-input type="number" pattern="\d*" min="0" v-model="adults"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-input-group prepend="Children: ">
                    <b-form-input type="number" pattern="\d*" min="0" v-model="children"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-form-select v-model="classSelection" :options="classOptions"></b-form-select>
                </b-col>
                <b-col><b-button type="submit" variant="primary" class="float-right">Search Now!</b-button></b-col>
              </b-row>
            </b-form>
          </b-tab>
          <b-tab title="Hotels">
            not implemented
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      addReturn: false,
      outboundDate: moment().format('YYYY-MM-DD'),
      returnDate: null,
      adults: 1,
      children: 0,
      from: '',
      to: '',
      classSelection: 'economy',
      classOptions: [
        { value: 'economy', text: 'Economy' },
        { value: 'premium', text: 'Premium' },
        { value: 'business', text: 'Business' },
        { value: 'firstclass', text: 'First Class' }
      ]
    }
  },
  methods: {
    searchNow: function (evt) {
      evt.preventDefault()
      this.$store.commit('updateSearch', { from: this.from, to: this.to, outboundDate: this.outboundDate, returnDate: this.returnDate })
      this.$router.push('/search')
    },
    addReturnDate: function () {
      this.addReturn = true
      this.returnDate = moment(this.outboundDate).add(1, 'days').format('YYYY-MM-DD')
    }
  },
  mounted () {
    if (this.$store.state.flightSearch.outboundDate !== '') {
      this.from = this.$store.state.flightSearch.from
      this.to = this.$store.state.flightSearch.to
      this.outboundDate = this.$store.state.flightSearch.outboundDate
      this.returnDate = this.$store.state.flightSearch.returnDate
    }
  }
}
</script>

<style>
label {
  margin-bottom: 0;
}
</style>
