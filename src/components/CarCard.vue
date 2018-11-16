<template>
  <b-card>
    <b-row class="align-items-center">
      <b-col cols="12" md="3">
        <b-img :src="car.image" style="object-fit: contain; max-width: 100%;"></b-img>
      </b-col>
      <b-col cols="12" md="4" class="mt-1 mt-md-0">
        <b-row>
          <b-col>
            <h3>{{ car.class }}</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{ car.car }} or similar
          </b-col>
        </b-row>
        <b-row class="mt-2 align-items-center">
          <b-col>
            <i class="icon-gear"></i>
            <span>Manual</span>
          </b-col>
          <b-col>
            <v-icon style="vertical-align: bottom;" class="mr-2">people_outline</v-icon>
            <span>{{ car.seats }} people</span>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="5" class="mt-3 mt-md-0">
        <b-row>
          <b-col><h5>Cheapest Price</h5></b-col>
        </b-row>
        <b-row>
          <b-col style="border-right: 1px solid #ccc;">
            <b-row>
              <b-col>
                <span class="price">£45.88</span>
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
                <span class="price">£45.88</span>
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
            <b-btn block>
              Book Now!
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    car: Object,
    index: Number
  }
}
</script>

<style>
.priceType {
  text-align: center;
}

.price {
  font-size: 1.75rem
}

.icon-gear {
  display: inline-block;
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2017%2015.7%22%3E%3Cstyle%3E.st0%7Bfill%3A%236E6E6E%3B%7D%3C%2Fstyle%3E%3Ctitle%3Etransmission%20type%3C%2Ftitle%3E%3Cg%20id%3D%22Camada_2%22%3E%3Cg%20id%3D%22Layer_1_1_%22%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M2.2%203.9h-.5C.8%203.9%200%203.1%200%202.2v-.5C0%20.8.8%200%201.7%200h.5c1%200%201.7.8%201.7%201.7v.5c0%20.9-.8%201.7-1.7%201.7zm-.5-2.6c-.2%200-.4.2-.4.4v.5c0%20.2.2.4.4.4h.5c.2%200%20.4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4h-.5zM8.7%203.9h-.4c-1%200-1.7-.8-1.7-1.7v-.5C6.6.7%207.4%200%208.3%200h.5c1%200%201.7.8%201.7%201.7v.5c-.1.9-.8%201.7-1.8%201.7zm-.4-2.6c-.3%200-.5.2-.5.4v.5c0%20.2.2.4.4.4h.5c.2%200%20.4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4h-.4zM7.8%209.6h1.3v3.3H7.8z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M7.8%203.1h1.3v3.3H7.8z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M15.7%2012.1h-1.3V8.6c0-.1-.1-.1-.1-.1H2.8c-.8%200-1.5-.7-1.5-1.4V3.3h1.3V7c0%20.1.1.1.1.1h11.5c.8%200%201.4.7%201.4%201.5v3.5zM15.2%203.9h-.5c-1%200-1.7-.8-1.7-1.7v-.5c0-1%20.8-1.7%201.7-1.7h.5c1%200%201.7.8%201.8%201.7v.5c0%201-.8%201.7-1.8%201.7.1%200%20.1%200%200%200zm-.4-2.6c-.2%200-.4.2-.4.4v.5c0%20.2.2.4.4.4h.5c.2%200%20.4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4h-.5zM8.7%2015.7h-.4c-1%200-1.7-.8-1.7-1.7v-.5c0-1%20.8-1.7%201.7-1.7h.5c1%200%201.7.8%201.7%201.7v.5c0%20.9-.8%201.7-1.8%201.7zm-.4-2.6c-.2%200-.4.2-.4.4v.5c0%20.2.2.4.4.4h.5c.2%200%20.4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4h-.5z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M15.2%2015.7h-.5c-1%200-1.7-.8-1.7-1.7v-.5c0-1%20.8-1.7%201.7-1.7h.5c1%200%201.7.8%201.8%201.7v.5c0%20.9-.8%201.7-1.8%201.7.1%200%20.1%200%200%200zm-.4-2.6c-.2%200-.4.2-.4.4v.5c0%20.2.2.4.4.4h.5c.2%200%20.4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4h-.5zM14.4%203.1h1.3v3.3h-1.3z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
}
</style>
