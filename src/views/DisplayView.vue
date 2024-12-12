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

<script lang="ts">
import CatCardComponent from "@/components/CatCardComponent.vue";

export default {
  components: {
    CatCardComponent,
  },
  data() {
    return {
      cats: [
        {
          id: 1,
          name: "cat 1",
          score: 1000,
          rank: 1,
        },
        {
          id: 2,
          name: "cat 2",
          score: 1000,
          rank: 2,
        },
        {
          id: 3,
          name: "cat 3",
          score: 1000,
          rank: 3,
        },
        {
          id: 4,
          name: "cat 4",
          score: 1000,
          rank: 4,
        },
        {
          id: 5,
          name: "cat 5",
          score: 1000,
          rank: 5,
        },
        {
          id: 6,
          name: "cat 6",
          score: 1000,
          rank: 6,
        },
      ],
    };
  },
};
</script>

<style>
.leaderboard {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px 0;
}

.container {
  width: 80%;
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
