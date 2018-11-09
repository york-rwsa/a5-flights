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
                    <b-col cols="8"><b-form-input tabindex="1" v-model="from" id="from" type="text" required placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row class="align-items-center">
                    <b-col><label for="from">Outbound Date</label></b-col>
                    <b-col cols="7"><b-form-input tabindex="3" type="date" v-model="outboundDate"></b-form-input></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="my-4">
                <b-col>
                  <b-row class="align-items-center">
                    <b-col><label for="from">To</label></b-col>
                    <b-col cols="8"><b-form-input tabindex="2" v-model="to" id="from" type="text" required placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row v-if="addReturn" class="align-items-center">
                    <b-col><label for="from">Return Date</label></b-col>
                    <b-col cols="7"><b-form-input tabindex="4" type="date" v-model="returnDate"></b-form-input></b-col>
                  </b-row>
                  <b-row v-if="!addReturn" class="align-items-center">
                    <b-col></b-col>
                    <b-col>
                      <b-button class="" @click="addReturnDate" tabindex="4">Add Return</b-button>
                    </b-col>
                    <b-col></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col>
                  <b-input-group prepend="Adults: ">
                    <b-form-input type="number" pattern="\d*" min="0" v-model="adults" tabindex="5"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-input-group prepend="Children: ">
                    <b-form-input type="number" pattern="\d*" min="0" v-model="children" tabindex="6"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-form-select v-model="classSelection" :options="classOptions" tabindex="7"></b-form-select>
                </b-col>
                <b-col><b-button type="submit" variant="primary" class="float-right" tabindex="8">Search Now!</b-button></b-col>
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
      classSelection: 'Economy',
      classOptions: [
        { value: 'Economy', text: 'Economy' },
        { value: 'Premium', text: 'Premium' },
        { value: 'Business', text: 'Business' },
        { value: 'First Class', text: 'First Class' }
      ]
    }
  },
  methods: {
    searchNow: function (evt) {
      evt.preventDefault()
      this.$store.commit('updateSearch', {
        from: this.from,
        to: this.to,
        outboundDate: this.outboundDate,
        returnDate: this.returnDate,
        flightClass: this.classSelection
      })
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
      this.classSelection = this.$store.state.flightSearch.flightClass
    }
  }
}
</script>

<style>
label {
  margin-bottom: 0;
}
</style>
