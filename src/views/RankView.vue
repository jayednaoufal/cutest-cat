<template>
  <div class="container">
    <div class="leaderboard">
      <CatCardComponent :cats="cats"></CatCardComponent>
    </div>
    <FooterComponent buttonName="backToVote"></FooterComponent>
  </div>
</template>

<script>
import CatCardComponent from "@/components/CatCardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CatCardComponent,
    FooterComponent,
  },
  computed: {
    ...mapGetters("cats", {
      cats: "getCats",
    }),
  },
};
</script>

<style>
.leaderboard {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px 0;
  padding: 30px 0;
}

.container {
  width: 90%;
  justify-self: center;
  text-align: center;
  padding: 0 0;
}
</style>
