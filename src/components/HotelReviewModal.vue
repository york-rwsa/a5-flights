<template>
  <div>
    <span style="font-size: 75%; color: grey;">{{ hotel.reviews }} reviews    </span>
    <b-btn  v-b-modal="modalID" :variant="ratingVariant" size="sm">{{ hotel.rating }}</b-btn>
    <b-modal size="lg" :id="modalID" :ref="modalID" centered>
      <div slot="modal-header" class="w-100">
        <b-row class="align-items-center">
          <b-col>
            <b-row class="align-items-center">
              <b-col cols="2">
                <h6 class="mb-0">{{ hotel.name }}</h6>
              </b-col>
              <b-col cols="10" md="10">
                <el-rate
                  class="d-none d-sm-block mx-auto"
                  v-model="hotel.rating"
                  disabled
                  show-score
                  score-template="{value} stars"
                  :max="10"
                  >
                </el-rate>
                <el-rate
                  class="float-right d-block d-sm-none"
                  :value="hotel.rating / 2"
                  disabled
                  :max="5"
                  >
                </el-rate>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="1">
            <b-btn-close @click="hideModal()"></b-btn-close>
          </b-col>
        </b-row>
      </div>
      <b-container fluid>
        <b-row class="mb-2">
          <b-col>
            <span>{{ hotel.reviews }} trusted reviews</span>
          </b-col>
        </b-row>
        <b-row class = "my-1 pt-2" style="border-top: 1px solid #ccc;" v-for="i in 3" :key="i">
          <b-col>
            <b-row class="align-items-center">
              <b-col cols="4">
                <span class="name">Jane Doe, York</span>
              </b-col>
              <b-col>
                <span>{{ hotel.rating }}</span>
                <i class="ml-1 el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
              </b-col>
              <b-col>
                <span>15</span>
                <v-icon style="vertical-align: middle;" class="ml-1" small>thumb_up</v-icon>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="mt-1">
                <p>
                  Easy to deal with. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sint totam repudiandae similique id tempore quos.
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    hotel: Object,
    hotelID: Number
  },
  computed: {
    modalID () {
      return 'details_modal_' + this.hotelID
    },
    ratingVariant () {
      if (this.hotel.rating > 7) {
        return 'success'
      } else {
        return 'warning'
      }
    }
  },
  methods: {
    hideModal () {
      this.$refs[this.modalID].hide()
    }
  }
}
</script>

<style>

</style>
