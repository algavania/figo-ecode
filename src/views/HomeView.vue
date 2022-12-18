<template>
  <div>
    <LandingSection />
    <WelcomeSection />
  </div>
</template>

<script>
import LandingSection from "../components/home/LandingSection.vue";
import WelcomeSection from "../components/home/WelcomeSection.vue";

export default {
  name: "HomeView",
  components: {
    LandingSection,
    WelcomeSection,
  },
};
</script>
