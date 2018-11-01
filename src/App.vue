<template>
  <div id="app" data-app>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">A5 Flights</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <b-container>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

