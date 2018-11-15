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
      this.loading.text = 'Taking you to package booking site'
      setTimeout(() => {
        this.loading.close()
      }, 4000)
    }
  },
  computed: {
    loading () {
      return this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  destroyed () {
    this.loading.close()
  }
}
</script>

<style>
.card-img {
  height: 40%;
  background-size: cover;
}
</style>
