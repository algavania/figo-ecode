<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <v-row>
          <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
            <v-img
              class="accent border-4"
              src="../../assets/Chef.png"
              alt="Chef"
            ></v-img>
          </v-col>
          <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
            <div class="secondary--text normal-text">Welcome</div>
            <div class="title-text my-3">Welcome to Figo<br />Restaurant</div>
            <div>{{ text }}.<br /><br />{{ text }}.</div>
            <v-btn class="primary mt-8">Explore Our Story</v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WelcomeSection",
  props: ["text"],
};
</script>

<style scoped>
</style>