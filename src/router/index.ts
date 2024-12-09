import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import VoteView from "../views/VoteView.vue";
import DisplayView from "../views/DisplayView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "voteView",
    component: VoteView,
  },
  {
    path: "/display",
    name: "displayView",
    component: DisplayView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
