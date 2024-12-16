import CatsGetters from "./getters";
import CatsActions from "./actions";
import CatsMutations from "./mutations";
export default {
  namespaced: true,
  state: {
    cats: {},
    matches_joues: 0,
  },
  getters: CatsGetters,
  actions: CatsActions,
  mutations: CatsMutations,
};
