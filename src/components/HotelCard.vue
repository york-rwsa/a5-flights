<template>
  <b-card no-body>
    <b-row class="align-items-top">
      <!-- image / name -->
      <b-col cols="12" md="4">
        <div :style="{ 'height': '155px', 'background-size': 'cover', 'background-image': 'url(' + hotel.image + ')' }"></div>
      </b-col>

      <b-col class="card-body" md="8">
        <b-row>
          <!-- stats -->
          <b-col cols="12" md="6" class="mt-1 mt-md-0">
            <h6>{{ hotel.name }}</h6>
            <el-rate :value="hotel.stars"
                     :max="5"
                     disabled
                     disabled-void-icon-class="d-none"
                     style="font-size: 12px"
                     show-score
                     score-template="{value} Stars"
            ></el-rate>
            <span><v-icon style="font-size: 20px;">place</v-icon>10 Miles from city center</span>
            <hotel-review-modal class="float-right mt-3" :hotel="hotel" :hotelID="index"></hotel-review-modal>
          </b-col>

          <!-- price -->
          <b-col cols="12" md="6" class="mt-3 mt-md-0">
            <b-row>
              <b-col><h5>Cheapest Price</h5></b-col>
            </b-row>
            <b-row>
              <b-col style="border-right: 1px solid #ccc;">
                <b-row>
                  <b-col>
                    <span class="price">£{{ hotel.pricePerDay * days}}</span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <span class="priceType">total</span>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row>
                  <b-col>
                    <span class="price">£{{ hotel.pricePerDay }}</span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <span class="priceType">per day</span>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col>
                <b-btn block to="book">
                  Book Now!
                </b-btn>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import HotelReviewModal from '@/components/HotelReviewModal'

export default {
  components: {
    HotelReviewModal
  },
  props: {
    hotel: Object,
    index: Number,
    days: Number
  }
}
</script>

<style>
.el-rate__icon {
  font-size: 13px;
  margin-right: 3px;
}

.el-rate__text {
  margin-left: 5px;
}
</style>
