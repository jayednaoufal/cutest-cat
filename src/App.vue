<template>
  <div class="header">
    <router-link to="/" class="no-underline">
      <div class="header-image">
        <img src="./assets/logo.png" alt="vue" />
      </div>
      <h1 class="title">CATMASH</h1>
    </router-link>
  </div>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.index();
  },
  methods: {
    ...mapActions("cats", {
      index: "index",
    }),
  },
};
</script>
<style>
template {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  width: 30%;
  justify-self: center;
  text-align: center;
  margin-bottom: 50px;
}
.header-image {
  width: 30%;
  height: 118px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #666;
  margin-top: 20px;
  overflow: hidden;
}

.header-image img {
  height: 80%;
  width: 80%;
  object-fit: cover;
}

.no-underline {
  text-decoration: none;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.6em;
  font-weight: 650;
  color: #333;
  margin-top: 5px;
}
</style>
