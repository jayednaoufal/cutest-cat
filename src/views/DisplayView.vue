<template>
  <div class="container">
    <div class="leaderboard">
      <CatCardComponent :cats="cats"></CatCardComponent>
    </div>
    <div class="footer">
      <router-link class="ranking-button" to="/">Revenir au vote</router-link>
      <p class="matches-played">X matches joués</p>
    </div>
  </div>
</template>

<script>
import CatCardComponent from "@/components/CatCardComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CatCardComponent,
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

.footer {
  text-align: center;
}

.ranking-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.ranking-button:hover {
  background-color: #555;
}

.matches-played {
  margin-top: 10px;
  font-size: 0.9em;
  color: #888;
}
</style>
