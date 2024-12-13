<template>
  <div class="container">
    <VoteComponent :cats="cats"></VoteComponent>
    <div class="footer">
      <router-link class="ranking-button" to="/display">
        Voir le classement des chats
      </router-link>
      <p class="matches-played">X matches joués</p>
    </div>
  </div>
</template>

<script>
import VoteComponent from "@/components/VoteComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    VoteComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("cats", {
      cats: "getCats",
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
