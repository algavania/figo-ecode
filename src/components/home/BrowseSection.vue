<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <div class="secondary--text normal-text text-center">Browse</div>
        <div class="title-text text-center mt-3 mb-5">Explore Our Menu</div>
        <v-tabs vertical hide-slider>
          <v-tab
            class="left-border"
            active-class="active-border secondary--text text-left"
            v-for="menu in menus"
            :key="menu.title"
          >
            {{ menu.title }}
          </v-tab>

          <v-tab-item v-for="menu in menus" :key="menu.title">
            <v-item-group>
              <v-container>
                <v-row>
                  <v-col
                    v-for="item in items"
                    :key="item.image"
                    cols="12"
                    md="4"
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        dark
                        class="black--text card-color pa-5 box-shadow"
                        :class="active ? 'card-active' : ''"
                        :ripple="false"
                        @click="toggle"
                        height="300"
                      >
                        <v-img
                          :src="require(`../../assets/${item.image}`)"
                          contain
                          height="170"
                        ></v-img>
                        <div class="normal-text text-center mt-3">
                          {{ item.name }}
                        </div>
                        <div class="d-flex justify-center my-1">
                          <div
                            class="d-flex justify-start"
                            style="width: 100px"
                          >
                            <v-img
                              v-for="n in item.rating"
                              :key="n"
                              src="../../assets/Star.png"
                              contain
                              height="12"
                              width="5"
                            ></v-img>
                          </div>
                        </div>
                        <div class="text-price normal-text text-center">
                          ${{ item.price
                          }}<span class="discount-price">{{
                            item.discountPrice
                          }}</span>
                        </div>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
            <div class="d-flex justify-end py-8">
                <div class="btn-arrow box-shadow"><v-icon size="40">mdi-menu-left</v-icon></div>
                <div class="btn-arrow-right box-shadow primary mx-4"><v-icon size="40" color="white">mdi-menu-right</v-icon></div>
            </div>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BrowseSection",
  data: () => ({
    menus: [
      { title: "Breakfast" },
      { title: "Lunch" },
      { title: "Dinner" },
      { title: "Dessert" },
      { title: "Soups" },
      { title: "Drinks" },
    ],
    items: [
      {
        name: "Salmon Steak",
        rating: 5,
        price: 100,
        discountPrice: 20,
        image: "Salmon.png",
      },
      {
        name: "Grilled Chicken BBQ",
        rating: 5,
        price: 100,
        discountPrice: 20,
        image: "Chicken.png",
      },
      {
        name: "Spinach Sandwich",
        rating: 5,
        price: 100,
        discountPrice: 20,
        image: "Spinach.png",
      },
    ],
  }),
};
</script>

<style scoped>
.active-border {
  border-left: 3.5px solid #febd00 !important;
}

.tab-width {
  width: 40% !important;
}

.left-border {
  border-left: 3.5px solid rgb(228, 228, 228);
  justify-content: start !important;
}

.text-price {
  color: green;
}

.discount-price {
  color: grey;
  text-decoration: line-through;
  font-size: 0.8rem;
}

.card-color {
  background-color: #f8fbf5;
}

.btn-arrow {
border-radius: 3rem 0 0 3rem;
}

.btn-arrow:hover {
    cursor: pointer;
}

.btn-arrow-right {
border-radius: 0 3rem 3rem 0;
}

.btn-arrow-right:hover {
    cursor: pointer;
}
</style>

<style>
.v-tabs--vertical > .v-tabs-bar {
  width: 20%;
}
</style>