export default {
  setCats(state, cats) {
    const ranks = Array(cats.length).fill(1);
    const scores = Array(cats.length).fill(0);
    const likes = Array(cats.length).fill(false);
    const new_cats = {
      cats: cats,
      scores: scores,
      ranks: ranks,
      likes: likes,
    };
    state.cats = new_cats;
  },

  setMatchesJoues(state) {
    if (state.cats.likes.includes(true)) {
      state.matches_joues += 1;
      state.cats.likes.fill(false);
    }
  },

  modifyScoreAndRank(state, index) {
    state.cats.likes[index] = !state.cats.likes[index];
    state.cats.likes[index]
      ? (state.cats.scores[index] += 1)
      : (state.cats.scores[index] -= 1);
    const catScores = state.cats.cats.map((cat, i) => ({
      name: cat,
      score: state.cats.scores[i],
      index: i,
    }));

    const sortedCats = catScores.sort((a, b) => b.score - a.score);

    const ranks = sortedCats.map((cat, index) => ({
      index: cat.index,
      rank: index + 1,
    }));

    ranks.forEach((rankObj) => {
      state.cats.ranks[rankObj.index] = rankObj.rank;
    });
  },
};
