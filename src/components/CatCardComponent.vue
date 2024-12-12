<template>
  <div
    v-for="(cat, index) in cats"
    :key="cat.id"
    :class="leaderboardClass(index + 1)"
  >
    <div class="rank">{{ index + 1 }}</div>
    <div class="cat-image">
      <img :src="cat.url" :alt="cat.id" />
    </div>
    <div>Chat {{ index + 1 }}</div>
    <div class="score">Score: {{ 1000 - index + 1 }} pts</div>
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
  overflow: hidden;
}

.cat-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.leaderboard-item-first {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #394149;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 500px;
  margin: 20px 0;
  align-self: center;
}

.leaderboard-item-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #565e68;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 400px;
  margin: 20px 0;
  align-self: flex-end;
}

.leaderboard-item-third {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6f767e;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  position: relative;
  width: 30%;
  height: 300px;
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
