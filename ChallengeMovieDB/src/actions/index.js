export const SET_USER = 'SET_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const REQUEST_API_GENRE_SUCCESS = 'REQUEST_API_GENRE_SUCCESS';

export const setUser = payload => ({type: SET_USER, payload});

export const requestApi = payload => ({type: REQUEST_API, payload});
export const requestApiSuccess = payload => ({
  type: REQUEST_API_SUCCESS,
  payload,
});
export const requestApiGenreSuccess = payload => ({
  type: REQUEST_API_GENRE_SUCCESS,
  payload,
});
export const requestApiError = payload => ({type: REQUEST_API_ERROR, payload});

// for fetching trending movies
export const fetchTrendingMovies = async dispatch => {
  const URL =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=5e4dbaf48b58268cbff212cb6e5c98a0';
  // dispatch(requestApi());
  // return fetch(MOVIEDB_URL)
  //   .then(res => res.json())
  //   .then(json => {
  //     return dispatch(requestApiSuccess(json));
  //   })
  //   .catch(err => dispatch(requestApiError(err)));
  dispatch(requestApi());
  try {
    const response = await fetch(URL);
    const {results} = await response.json();
    dispatch(requestApiSuccess(results));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};

export const fetchGenreMovies = async dispatch => {
  const URL =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=5e4dbaf48b58268cbff212cb6e5c98a0&language=en-US';
  dispatch(requestApi());
  try {
    const response = await fetch(URL);
    const {genres} = await response.json();
    dispatch(requestApiGenreSuccess(genres));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};