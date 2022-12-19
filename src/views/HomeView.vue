<template>
  <div>
    <LandingSection :text="text3" />
    <WelcomeSection :text="text" />
    <ReasonSection :text="text2" />
    <BrowseSection />
    <HistorySection :text="text" :text2="text3" />
    <TestimonialSection />
    <NewsSection />
    <SubscriptionSection />
  </div>
</template>

<script>
import LandingSection from "../components/home/LandingSection.vue";
import WelcomeSection from "../components/home/WelcomeSection.vue";
import ReasonSection from "../components/home/ReasonSection.vue";
import BrowseSection from "../components/home/BrowseSection.vue";
import HistorySection from "../components/home/HistorySection.vue";
import NewsSection from "../components/home/NewsSection.vue";
import SubscriptionSection from "../components/home/SubscriptionSection.vue";
import TestimonialSection from "../components/home/TestimonialSection.vue";

export default {
  name: "HomeView",
  components: {
    LandingSection,
    WelcomeSection,
    ReasonSection,
    BrowseSection,
    HistorySection,
    NewsSection,
    SubscriptionSection,
    TestimonialSection
  },
  data: () => ({
    text: 'Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vector for one-to-one leadership',
    text2:
      "Etiam feugiat eleifend est, odio tempor viate. Vivamus maximus scelerisque ipsum nec commodo.",
    text3:
      "Quickly predominate standard compliant architecture and may have prospective internal or organic sources.",
  }),
};
</script>
