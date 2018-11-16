<template>
  <b-form @submit="searchNow">
    <b-row class="align-items-center">
      <b-col cols="12" md="6">
        <b-input placeholder="Pickup Location"
                 tabindex="1"
                 required
                 v-model="form.pickupLocation"></b-input>
      </b-col>
      <b-col cols="2" md="2">
        <label for="pickupDate">Pickup Date</label>
      </b-col>
      <b-col cols="6" md="4">
        <b-input id="pickupDate"
                 type="date"
                 v-model="form.pickupDate"
                 tabindex="2"></b-input>
      </b-col>
    </b-row>
    <b-row class="mt-3 align-items-center">
      <b-col>
        <b-row>
          <b-col>
            <b-form-checkbox checked
                         tabindex="4"
                         v-model="form.driverOver25">
              Driver over the age of 25
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row v-if="!form.driverOver25" class="mt-2 align-items-center">
          <b-col>
            <label for="driverAge">Driver Age</label>
          </b-col>
          <b-col>
            <b-form-select v-model="form.driversAge"
                           :options="form.ageOptions"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" md="2">
        <label for="dropoffDate">Dropoff Date</label>
      </b-col>
      <b-col cols="6" md="4">
        <b-input id="dropoffDate"
                 type="date"
                 v-model="form.dropoffDate"
                 tabindex="3"></b-input>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col><b-button type="submit" variant="primary" class="float-right" tabindex="8">Search Now!</b-button></b-col>
    </b-row>
  </b-form>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'

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
      }
    }
  },
  methods: {
    searchNow: function (evt) {
      evt.preventDefault()
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
</script>

<style>
label {
  margin-bottom: 0 !important;
}
</style>
