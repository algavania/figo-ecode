<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <div class="secondary--text text-center normal-text">Subscription</div>
        <div class="title-text mt-5 text-center">Wants to Get Update?</div>
        <div class="my-14">
          <center>
            <v-text-field
              class="txt-field"
              label="Enter Your Email Address"
              height="3.6rem"
              solo
              flat
              rounded
            >
              <template v-slot:append>
                <v-btn fab elevation="0" color="primary"
                  ><v-icon color="white">mdi-arrow-right</v-icon></v-btn
                >
              </template>
            </v-text-field>
          </center>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SubscriptionSection",
};
</script>

<style scoped>
.txt-field {
  width: 50%;
}
</style>