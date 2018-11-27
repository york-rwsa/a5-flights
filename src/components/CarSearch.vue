<template>
  <b-form @submit="searchNow">
    <b-row class="align-items-center">
      <b-col cols="12" md="6">
        <v-autocomplete
          placeholder="Pickup Location"
          required
          v-model="form.pickupLocation"
          :items="airports"
          tabindex="1"
        ></v-autocomplete>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="12" md="4">
            <label for="pickupDate">Pickup Date</label>
          </b-col>
          <b-col cols="10" md="8">
            <b-input id="pickupDate"
                      type="date"
                      v-model="form.pickupDate"
                      tabindex="2"></b-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col cols="12" md="4">
            <label for="dropoffDate">Dropoff Date</label>
          </b-col>
          <b-col  cols="10" md="8">
            <b-input id="dropoffDate"
                      type="date"
                      v-model="form.dropoffDate"
                      tabindex="3"></b-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-3 align-items-center">
      <b-col cols="12" md="4">
        <b-form-checkbox checked
                      tabindex="4"
                      v-model="form.driverOver25">
          Driver over the age of 25
        </b-form-checkbox>
      </b-col>
      <b-col v-if="!form.driverOver25" cols="12" md="4">
        <b-row class="align-items-center">
          <b-col md="5" cols="6">
            <label for="driverAge">Driver Age</label>
          </b-col>
          <b-col cols="4" md="5">
            <b-form-select v-model="form.driversAge"
                            :options="form.ageOptions"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col><b-button type="submit" variant="primary" class="float-right" tabindex="8">Search Now!</b-button></b-col>
    </b-row>

    <b-alert variant="warning"
             :show="dateAlert"
             class="mt-3 mb-0">
      Dropoff date can't be before the pickup date!
    </b-alert>
  </b-form>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
import airportJsonData from '@/misc/airports_list.json'

export default {
  data () {
    return {
      form: {
        driverOver25: true,
        pickupDate: moment().format('YYYY-MM-DD'),
        dropoffDate: moment().add(1, 'days').format('YYYY-MM-DD'),
        pickupLocation: '',
        ageOptions: _.range(18, 25),
        driversAge: 18
      },
      dateAlert: false,
      airports: airportJsonData.data
    }
  },
  methods: {
    searchNow: function (evt) {
      evt.preventDefault()
      debugger
      if (this.form.pickupDate > this.form.dropoffDate) {
        this.dateAlert = true
      } else {
        this.$store.commit('updateCarSearch', {
          pickupDate: this.form.pickupDate,
          dropoffDate: this.form.dropoffDate,
          pickupLocation: this.form.pickupLocation,
          driverOver25: this.form.driverOver25,
          driversAge: this.form.driversAge
        })
        this.$router.push('/carresults')
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
