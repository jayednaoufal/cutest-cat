<template>
  <div v-for="cat in cats" :key="cat.id" :class="leaderboardClass(cat.rank)">
    <div class="rank">{{ cat.rank }}</div>
    <div class="cat-image">
      <img src="" :alt="cat.name" />
    </div>
    <div>{{ cat.name }}</div>
    <div class="score">Score: {{ cat.score }} pts</div>
  </div>
</template>

<script>
export default {
  props: ["cats"],

  methods: {
    leaderboardClass(rank) {
      if (rank == 1) return "leaderboard-item-first";
      else if (rank == 2) return "leaderboard-item-second";
      else if (rank == 3) return "leaderboard-item-third";
      else return "leaderboard-item";
    },
  },
};
</script>

<style scoped>
.cat-image {
  width: 70%;
  height: 150px;
  background-color: #eaeaea;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #666;
  margin: 10px 0;
}

.leaderboard-item-first {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e7ef;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 100%;
  margin: 20px 0;
  align-self: center;
}

.leaderboard-item-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e7ef;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 80%;
  margin: 20px 0;
  align-self: flex-start;
}

.leaderboard-item-third {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e7ef;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 40%;
  margin: 20px 0;
  align-self: flex-end;
}

.leaderboard-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e7ef;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  margin: 20px 0;
}

.rank {
  background-color: #fff;
  color: #1c3c73;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.score {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 5px;
}
</style>
