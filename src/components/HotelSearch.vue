<template>
  <b-form @submit="searchNow">
    <b-row class="align-items-center">
      <b-col cols="12" md="4">
        <v-autocomplete
          placeholder="Find hotels near"
          required
          v-model="form.location"
          :items="airports"
          tabindex="1"
        ></v-autocomplete>
      </b-col>
      <b-col>
        <b-row class="align-items-center">
          <b-col cols="12" md="5" offset-md="1">
            <label for="pickupDate">Check-in</label>
            <b-input id="pickupDate"
                      type="date"
                      v-model="form.checkin"
                      tabindex="2"></b-input>
          </b-col>
          <b-col cols="12" md="5" class="mt-2 mt-md-0">
            <label for="dropoffDate">Check-out</label>
            <b-input id="dropoffDate"
                      type="date"
                      v-model="form.checkout"
                      tabindex="3"></b-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-3 align-items-center">
      <b-col cols="6" md="4">
        <b-input-group prepend="Adults: ">
          <b-form-input type="number" pattern="\d*" min="0" tabindex="5"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="6" md="4" class="pl-0 pl-md-3 pr-md-3">
        <b-input-group prepend="Children: ">
          <b-form-input type="number" pattern="\d*" min="0" tabindex="6"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="6" md="4" class="pl-0 pl-md-3 pr-md-3">
        <b-input-group prepend="Rooms: ">
          <b-form-input type="number" pattern="\d*" min="0" tabindex="6"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col><b-button type="submit" variant="primary" class="float-right" tabindex="8">Search Now!</b-button></b-col>
    </b-row>

    <b-alert variant="warning"
             :show="dateAlert"
             class="mt-3 mb-0">
      Checkin date can't be before the checkout date!
    </b-alert>
  </b-form>
</template>

<script>
import moment from 'moment'
import airportJsonData from '@/misc/airports_list.json'

export default {
  data () {
    return {
      form: {
        checkin: moment().format('YYYY-MM-DD'),
        checkout: moment().add(1, 'days').format('YYYY-MM-DD'),
        location: ''
      },
      airports: airportJsonData.data,
      dateAlert: false
    }
  },
  methods: {
    searchNow: function (evt) {
      evt.preventDefault()
      if (this.form.checkin > this.form.checkout) {
        this.dateAlert = true
      } else {
        this.$store.commit('updateHotelSearch', {
          checkin: this.form.checkin,
          checkout: this.form.checkout,
          location: this.form.location
        })
        this.$router.push('/hotelresults')
      }
    }
  }
}
</script>

<style>
label {
  margin-bottom: 0 !important;
}
</style>
