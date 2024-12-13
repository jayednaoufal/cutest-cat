import CatsGetters from "./getters";
import CatsActions from "./actions";
import CatsMutations from "./mutations";
export default {
  namespaced: true,
  state: {
    cats: {},
  },
  getters: CatsGetters,
  actions: CatsActions,
  mutations: CatsMutations,
};
