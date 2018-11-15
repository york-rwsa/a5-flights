<template>
  <b-card :title="deal.title"
          :img-src="deal.img"
          class="h-100">
    <p class="card-text">
      {{ deal.text }}
    </p>
    <div slot="footer">
      <b-button class="float-right" @click="book" primary>More Detials</b-button>
    </div>    
  </b-card>
</template>

<script>
export default {
  props: ['deal'],
  methods: {
    book () {
      this.$store.commit('updateBookingMessage', { message: 'Redirecting to package booking site' })
      this.$router.push('bookflight')
    }
  }
}
</script>

<style>
.card-img {
  height: 40%;
  background-size: cover;
}
</style>
