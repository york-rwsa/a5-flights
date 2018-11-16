<template>
  <b-container>
    <b-row class="align-items-center mt-1">
      <b-col cols="12" md="6" offset-md="3">
        <b-card>
          <b-row>
            <b-col>
              deets bro
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- <b-col cols="12" md="2" class="mt-2 mt-md-0"><b-form-select v-model="sortOption" :options="sortOptions"></b-form-select></b-col> -->
    </b-row>
    <b-row>
      <b-col cols="12" md="3" class="mt-4">
        <b-card no-body>
          <div slot="header" class="navbar navbar-light">
            <span class="navbar-brand">Filter Results</span>
            <b-btn class="navbar-toggler d-block d-sm-none" v-b-toggle.filterCollapse>
              <span class="navbar-toggler-icon"></span>
            </b-btn>
          </div>
          <b-collapse id="filterCollapse" ref="filterCollapse" class="dont-collapse-sm">
            <b-card-body>

            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col>
        <!-- <v-data-iterator :items="filteredFlights">

        </v-data-iterator> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
@media (min-width: 768px) {
  .collapse.dont-collapse-sm {
    display: block !important;
    height: auto !important;
    visibility: visible;
  }
}
</style>
