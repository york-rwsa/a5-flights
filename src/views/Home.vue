<template>
  <b-row>
    <b-col></b-col>
    <b-col cols="8">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Single" active>
            <b-form>
              <b-row class="my-3">
                <b-col>
                  <b-row>
                    <b-col><label for="from">From</label></b-col>
                    <b-col cols="8"><b-form-input id="from" type="text" placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col><label for="from">Outbound Date</label></b-col>
                    <b-col cols="7"><b-form-input type="date" v-model="outboundDate"></b-form-input></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="my-3">
                <b-col>
                  <b-row>
                    <b-col><label for="from">To</label></b-col>
                    <b-col cols="8"><b-form-input id="from" type="text" placeholder="Enter an airport or city"></b-form-input></b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col><label for="from">Return Date</label></b-col>
                    <b-col cols="7"><b-form-input type="date" v-model="returnDate"></b-form-input></b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="my-3">
                <b-col>
                  <b-input-group prepend="Adults: ">
                    <b-form-input type="number" min="0" v-model="adults"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-input-group prepend="Children: ">
                    <b-form-input type="number" min="0" v-model="children"></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  <b-form-select v-model="classSelection" :options="classOptions"></b-form-select>
                </b-col>
                <b-col><b-button type="submit" variant="primary" class="float-right" to="search">Search Now!</b-button></b-col>
              </b-row>
            </b-form>
          </b-tab>
          <b-tab title="Return">
            Tab Contents 2
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
      outboundDate: moment().format('YYYY-MM-DD'),
      returnDate: moment().add(1, 'days').format('YYYY-MM-DD'),
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
  computed: {
  }
}
</script>
