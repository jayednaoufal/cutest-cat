<template>
  <div class="cats">
    <div v-for="(cat, index) in cats.cats" :key="cat.id" class="cat">
      <div class="cat-image">
        <img :src="cat.url" :alt="cat.name" />
      </div>
      <div class="cat-name">Chat {{ index + 1 }}</div>
      <button class="like-button" @click="like(index)">J'aime</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: ["cats"],
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    like(index) {
      this.modifyScore(index);
      this.liked = !this.liked;
    },
    ...mapMutations("cats", {
      modifyScore: "modifyScore",
    }),
  },
};
</script>
<style scoped>
.cats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px 0;
}

.cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin: 50px 0;
}

.cat-image {
  width: 50%;
  height: 250px;
  background-color: #eaeaea;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #666;
  overflow: hidden;
}
.cat-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.cat-name {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2em;
  font-weight: 650;
  margin-top: 6px;
  margin-bottom: 20px;
}

.like-button {
  background-color: #223951;
  color: white;
  border: none;
  padding: 10px 23px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.like-button:hover {
  background-color: #2c80d4;
}
.like-button:active {
  background-color: #2c80d4;
  transform: scale(0.95);
}
</style>
