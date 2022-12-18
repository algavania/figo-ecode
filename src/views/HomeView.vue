<template>
  <div>
    <LandingSection :text="text" />
    <WelcomeSection :text="text"/>
    <ReasonSection :text="text2"/>
    <BrowseSection />
  </div>
</template>

<script>
import LandingSection from "../components/home/LandingSection.vue";
import WelcomeSection from "../components/home/WelcomeSection.vue";
import ReasonSection from "../components/home/ReasonSection.vue";
import BrowseSection from "../components/home/BrowseSection.vue";

export default {
  name: "HomeView",
  components: {
    LandingSection,
    WelcomeSection,
    ReasonSection,
    BrowseSection,
  },
  data: () => ({
    text: 'Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vector for one-to-one leadership',
    text2: 'Etiam feugiat eleifend est, odio tempor viate. Vivamus maximus scelerisque ipsum nec commodo.'
  })
};
</script>
