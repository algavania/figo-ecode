<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <div class="secondary--text normal-text text-center">News</div>
        <div class="title-text text-center mt-3 mb-5">Latest News</div>
        <v-row>
          <v-col
            cols="12"
            class="col-sm-12 col-md-4"
            v-for="content in contents"
            :key="content.image"
          >
            <v-card
              elevation="0"
              class="pa-5"
            >
              <v-layout row wrap align-center fill-height>
                <v-flex>
                  <v-img
                    :src="require(`../../assets/${content.image}`)"
                  ></v-img>
                  <div class="normal-text my-5">
                    {{ content.title }}
                  </div>
                  <div>{{ content.text }}</div>
                  <v-btn text color="secondary" class="pa-0">Read More</v-btn>
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
  name: "NewsSection",
  data: () => ({
    contents: [
        {
            image: 'Food1.png',
            title: 'Spain Appetizer',
            text: 'Quickly of predominate and standards compliants and an architecture.'
        },
        {
            image: 'Food2.png',
            title: 'Wine and Cheese',
            text: 'Quickly of predominate and standards compliants and an architecture.'
        },
        {
            image: 'Food3.png',
            title: 'Cups of Coffee',
            text: 'Quickly of predominate and standards compliants and an architecture.'
        },
    ]
  })
};
</script>

<style>
</style>