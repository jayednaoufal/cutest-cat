import axios from "axios";
export default {
  async index({ commit }) {
    try {
      const response = await axios.get(`https://data.latelier.co/cats.json`);
      commit("setCats", response.data.images);
    } catch (error) {
      console.log(error);
      commit("setCats", null);
    }
  },
};
