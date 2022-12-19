<template>
  <v-container class="full-height">
    <v-layout row wrap align-center fill-height>
      <v-flex>
        <div class="secondary--text normal-text text-center">Testimonial</div>
        <div class="title-text text-center mt-3 mb-14">Food Lover's Say</div>
        <v-row align-content="center" justify="center">
          <v-col cols="4" v-for="(item, n) in list" :key="item.name" :class="n != 1 ? (n != 1 && n == 3 ? 'mb-5' : 'mt-5') : ''">
            <div class="box-shadow pa-5">{{ item.text }}</div>
            <div class="d-flex mt-5 align-center">
              <v-avatar color="primary" size="56">
                <img 
                :src="require(`../../assets/${item.image}`)"
                alt=""
                 />
              </v-avatar>
              <div class="ml-4">
                <div>{{ item.name }}</div>
                <div class="grey--text font-weight-medium"><i>{{ item.job }}</i></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TestimonialSection",
  data: () => ({
    list: [
      {
        name: "Lurch Schpellchek",
        job: "UI & UX @ Microsoft",
        text: "Design is an evaluationary process and filler text is just one tool in your progress-pushing arsenal. Use it where it make sense process.",
        image: "People1.png",
      },
      {
        name: "Theodore Handle",
        job: "Design Lead @ Shopify",
        text: "Design is an evaluationary process and filler text is just one tool in your progress-pushing arsenal. Use it where it make sense process.",
        image: "People2.png",
      },
      {
        name: "Valentino Morose",
        job: "Design Lead @ InVision",
        text: "Design is an evaluationary process and filler text is just one tool in your progress-pushing arsenal. Use it where it make sense process.",
        image: "People3.png",
      },
      {
        name: "Ingredia Nutrisha",
        job: "Design Lead @ InVision",
        text: "Design is an evaluationary process and filler text is just one tool in your progress-pushing arsenal. Use it where it make sense process.",
        image: "People4.png",
      },
      {
        name: "Hermann P. Schnitzel",
        job: "Design Lead @ InVision",
        text: "Design is an evaluationary process and filler text is just one tool in your progress-pushing arsenal. Use it where it make sense process.",
        image: "People5.png",
      },
    ],
  }),
};
</script>

<style>
</style>