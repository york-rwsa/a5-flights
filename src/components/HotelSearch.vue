<template>
  <b-form @submit="searchNow">
    <b-row class="align-items-center">
      <b-col cols="12" md="4">
        <v-autocomplete
          placeholder="Find hotels near"
          required
          v-model="form.pickupLocation"
          :items="airports"
          tabindex="1"
        ></v-autocomplete>
      </b-col>
      <b-col>
        <b-row class="align-items-center">
          <b-col cols="12" md="5" offset-md="1">
            <label for="pickupDate">Arrival</label>
            <b-input id="pickupDate"
                      type="date"
                      v-model="form.pickupDate"
                      tabindex="2"></b-input>
          </b-col>
          <b-col cols="12" md="5" class="mt-2 mt-md-0">
            <label for="dropoffDate">Departure</label>
            <b-input id="dropoffDate"
                      type="date"
                      v-model="form.dropoffDate"
                      tabindex="3"></b-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-3 align-items-center">
      <b-col cols="6" md="4">
        <b-input-group prepend="Adults: ">
          <b-form-input type="number" pattern="\d*" min="0" v-model="adults" tabindex="5"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="6" md="4" class="pl-0 pl-md-3 pr-md-3">
        <b-input-group prepend="Children: ">
          <b-form-input type="number" pattern="\d*" min="0" v-model="children" tabindex="6"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="6" md="4" class="pl-0 pl-md-3 pr-md-3">
        <b-input-group prepend="Rooms: ">
          <b-form-input type="number" pattern="\d*" min="0" v-model="children" tabindex="6"></b-form-input>
        </b-input-group>
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
      airports: airportJsonData.data
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
