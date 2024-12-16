<template lang="">
  <div class="footer">
    <router-link v-if="buttonName == 'backToVote'" class="router-button" to="/">
      <i class="fas fa-angle-up" style="font-size: 24px"></i>
      Revenir au vote
    </router-link>
    <router-link
      v-if="buttonName == 'showRank'"
      class="router-button"
      @click="setMatchesJoues"
      to="/rank"
    >
      <i class="fas fa-angle-up" style="font-size: 24px"></i>
      Voir le classement des chats
    </router-link>
    <p class="matches-played">{{ matches_joues }} matches joués</p>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["buttonName"],
  computed: {
    ...mapGetters("cats", {
      matches_joues: "getMatchesJoues",
    }),
  },
  methods: {
    ...mapMutations("cats", {
      setMatchesJoues: "setMatchesJoues",
    }),
  },
};
</script>
<style>
.footer {
  width: 30%;
  height: 100%;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #666;
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
  border-bottom: none;
  margin-bottom: none;
  padding: 0;
}

i {
  padding: 5px 0;
}

.router-button {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  color: #223951;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.8em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  padding: 5px 0;
}

.matches-played {
  padding-top: 5px;
  padding-bottom: 10px;
  margin: 0;
  font-size: 0.7em;
  color: #888;
}
</style>
