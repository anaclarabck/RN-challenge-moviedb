const INITIAL_STATE = {
  trendingMovies: [],
  topMovie: '',
  genres: [],
  filteredMovies: [],
  isLoading: false,
};

function movies(state = INITIAL_STATE, action) {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
}

export default movies;
