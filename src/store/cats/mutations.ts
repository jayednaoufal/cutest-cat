export default {
  setCats(state, cats) {
    const ranks = Array(cats.length).fill(1);
    const scores = Array(cats.length).fill(0);
    const new_cats = {
      cats: cats,
      scores: scores,
      ranks: ranks,
    };
    state.cats = new_cats;
  },

  modifyScore(state, index) {
    state.cats.scores[index] += 1;

    const catScores = state.cats.cats.map((cat, i) => ({
      name: cat,
      score: state.cats.scores[i],
      index: i,
    }));

    const sortedCats = catScores.sort((a, b) => b.score - a.score);

    const ranks = sortedCats.map((cat, index) => ({
      index: cat.index, // Use the original index to assign ranks correctly
      rank: index + 1,
    }));

    ranks.forEach((rankObj) => {
      state.cats.ranks[rankObj.index] = rankObj.rank;
    });
  },
};
