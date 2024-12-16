import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import VoteView from "../views/VoteView.vue";
import RankView from "../views/RankView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "voteView",
    component: VoteView,
  },
  {
    path: "/rank",
    name: "rankView",
    component: RankView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
