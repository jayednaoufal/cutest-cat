<!-- eslint-disable prettier/prettier -->
<template>
  <div class="cats">
    <div v-for="cat in cats" :key="cat.id" class="cat">
      <div class="cat-image">
        <img :src="cat.url" :alt="cat.name" />
      </div>
      <button class="like-button">J'aime</button>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script lang="ts">
export default {
  props: ["cats"],
};
</script>
<!-- eslint-disable prettier/prettier -->
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
  margin: 20px 0;
}
.cat-image {
  width: 60%;
  height: 200px;
  background-color: #eaeaea;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #666;
  margin-bottom: 10px;
  overflow: hidden;
}
.cat-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.like-button {
  background-color: #223951;
  color: white;
  border: none;
  padding: 15px 23px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.like-button:hover {
  background-color: #3b5a78;
}
</style>
