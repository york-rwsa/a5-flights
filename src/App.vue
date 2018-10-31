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
      <router-view />
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
