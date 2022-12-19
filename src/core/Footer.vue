<template>
  <div class="accent">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="col-sm-12 col-md-3">
          <img src="../assets/logo.png" alt="Figo" height="32" />
          <div class="mt-3 mb-5">
            Don't miss to subscribe to our new feeds. Kindly fill the form
            below.
          </div>
          <div class="d-flex flex-row">
            <div
              class="btn-social d-flex justify-center mr-4 box-shadow"
              v-for="n in socials"
              :key="n"
            >
              <v-icon color="white">{{ n.icon }}</v-icon>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="col-sm-12 col-md-3"
          v-for="item in list"
          :key="item.title"
        >
        <div class="mb-5" style="font-size: 1.2rem;">{{ item.title }}</div>
          <div v-for="sub in item.subtitles" class="mb-3" :key="sub.text">
            {{ sub.text }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FooterView",
  data: () => ({
    socials: [
      { icon: "mdi-facebook" },
      { icon: "mdi-twitter" },
      { icon: "mdi-instagram" },
      { icon: "mdi-pinterest" },
    ],
    list: [
      {
        title: "Our Menu",
        subtitles: [
          { text: "Lunch" },
          { text: "Dinner" },
          { text: "Catering" },
        ],
      },
      {
        title: "Links",
        subtitles: [
          { text: "About Us" },
          { text: "Terms of Use" },
          { text: "Privacy Policy" },
        ],
      },
      {
        title: "Contact",
        subtitles: [
          { text: "+88016220140442" },
          { text: "info@restaurant.com" },
          { text: "Daudkandi, Comilla" },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.btn-social {
  background-color: #70a43c;
  height: 42px;
  width: 42px;
  border-radius: 4px;
}

.btn-social:hover {
  cursor: pointer
}
</style>