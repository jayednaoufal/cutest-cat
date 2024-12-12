import { createStore } from "vuex";
import CatsModule from "./cats/index";

export default createStore({
  modules: { cats: CatsModule },
});
