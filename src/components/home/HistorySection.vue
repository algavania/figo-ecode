<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <v-row>
          <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
            <div class="secondary--text normal-text">History of Figo</div>
            <div class="title-text mt-3 mb-5">We Cook Tradition &<br>Family Recipes</div>
            <div class="mb-8 mt-5">
              {{ text }}<br><br>{{ text2 }}
            </div>
            <v-btn class="primary">Explore Our Story</v-btn>
          </v-col>
          <v-col cols="12" class="col-sm-12 col-md-6" align-self="center">
            <v-img
              class="accent border-4"
              src="../../assets/Burger.png"
              alt="Burger"
            ></v-img>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  
<script>
export default {
  name: "HistorySection",
  props: ["text", "text2"],
};
</script>

<style>
</style>