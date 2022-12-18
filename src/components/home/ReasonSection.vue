<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <div class="secondary--text normal-text text-center">Reason</div>
        <div class="title-text text-center mt-3 mb-5">Why Choose Us?</div>
        <v-row>
          <v-col
            cols="12"
            class="col-sm-12 col-md-4"
            v-for="content in contents"
            :key="content.icon"
          >
            <v-card
              :class="content.active ? 'card-active box-shadow' : ''"
              :color="content.active ? 'white' : 'accent'"
              elevation="0"
              class="pa-5"
              height="300"
            >
              <v-layout row wrap align-center fill-height>
                <v-flex>
                  <v-img
                    :src="require(`../../assets/${content.icon}`)"
                    height="60"
                    contain
                  ></v-img>
                  <div class="text-center normal-text my-5">
                    {{ content.title }}
                  </div>
                  <div class="text-center">{{ text }}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ReasonSection",
  props: ["text"],
  data: () => ({
    contents: [
      {
        icon: "menu.png",
        title: "Various Menus",
        active: false,
      },
      {
        icon: "scooter.png",
        title: "Pocket Friendly Delivery",
        active: true,
      },
      {
        icon: "voucher.png",
        title: "Best Offers",
        active: false,
      },
    ],
  }),
};
</script>

<style scoped>
.card-active {
  border-bottom: 5px solid #70a43c !important;
}

.box-shadow {
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.2)!important;
  -webkit-box-shadow: 0 3px 15px rgb(0 0 0 / 0.2)!important;
  -moz-box-shadow: 0 3px 15px rgb(0 0 0 / 0.2)!important;
}
</style>