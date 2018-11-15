
<script>
export default {
  computed: {
    loading () {
      return this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  mounted () {
    this.loading.text = 'Redirecting to package booking site'
  },
  destroyed () {
    this.loading.close()
  }
}
</script>
