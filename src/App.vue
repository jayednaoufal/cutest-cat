<template>
  <div class="header">
    <div class="header-image">
      <img src="./assets/logo.png" alt="vue" />
    </div>
    <h1 class="title">CATMASH</h1>
  </div>
  <router-view />
</template>

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
  margin-bottom: 20px;
}
.header-image {
  width: 40%;
  height: 180px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
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
.title {
  font-size: 2em;
  font-weight: bold;
  color: #333;
}
</style>
