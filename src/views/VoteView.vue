<template>
  <div class="container">
    <VoteComponent :cats="cats"></VoteComponent>
    <FooterComponent buttonName="showRank"></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import VoteComponent from "@/components/VoteComponent.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    VoteComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("cats", {
      cats: "getCats",
    }),
  },
  methods: {
    ...mapMutations("cats", {
      setMatchesJoues: "setMatchesJoues",
    }),
  },
};
</script>

<style scoped>
.container {
  width: 85%;
  justify-self: center;
  text-align: center;
  padding: 0 0;
}
</style>
