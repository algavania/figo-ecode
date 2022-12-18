<template>
  <div class="accent">
    <v-container class="full-height h-100">
      <v-layout row wrap align-center fill-height>
        <v-flex>
          <v-row>
            <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
              <div class="large-text">
                All in Good Taste<br />Food with Figo.
              </div>
              <div class="mb-8 mt-5">
                {{ text }}
              </div>
              <div class="d-flex">
                <v-text-field
                  label="Enter Your Address"
                  height="3.6rem"
                  solo
                  flat
                ></v-text-field>
                <v-btn class="ml-4 primary">Get Started</v-btn>
              </div>
            </v-col>
            <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
              <v-img src="../../assets/PIzza.png" alt="Pizza"></v-img>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LandingSection",
  props: ["text"],
};
</script>

<style scoped>
.large-text {
  font-size: 3rem;
  line-height: 3.5rem;
}
</style>