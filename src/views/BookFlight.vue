<script>
export default {
  computed: {
    loading () {
      return this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    message () {
      return this.$store.getters.bookingMessage
    }
  },
  mounted () {
    if (this.message === '') {
      this.loading.text = 'Redirecting to airline\'s booking site'
    } else {
      this.loading.text = this.message
    }
  },
  destroyed () {
    this.loading.close()
  }
}
</script>
