<template>
  <div class="accent h-100">
    <v-container>
    <v-row>
      <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
        <div class="large-text">All in Good Taste<br />Food with Figo.</div>
        <div class="mb-8 mt-5">
          Quickly predominate standard compliant architecture and may have
          prospective internal or organic sources.
        </div>
        <div class="d-flex">
          <v-text-field
            label="Enter Your Address"
            height="3.6rem"
            solo
            flat
          ></v-text-field>
          <v-btn class="ml-4 primary"
            >Get Started</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
        <v-img src="../../assets/PIzza.png" alt="Pizza"></v-img>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "LandingSection",
};
</script>

<style scoped>
.large-text {
  font-size: 3rem;
}
</style>