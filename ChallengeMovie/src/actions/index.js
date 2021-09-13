import {moviedbKey} from '../services/moviedbKey';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const REQUEST_API_GENRE_SUCCESS = 'REQUEST_API_GENRE_SUCCESS';
export const REQUEST_TOP_MOVIE = 'REQUEST_TOP_MOVIE';
export const SET_FILTERED_MOVIES = 'SET_FILTERED_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export const filterMovies = payload => ({type: FILTER_MOVIES, payload});
export const setFilteredMovies = payload => ({
  type: SET_FILTERED_MOVIES,
  payload,
});
export const requestApi = payload => ({type: REQUEST_API, payload});
export const requestApiSuccess = payload => ({
  type: REQUEST_API_SUCCESS,
  payload,
});
export const requestTopMovie = payload => ({
  type: REQUEST_TOP_MOVIE,
  payload,
});
export const requestApiGenreSuccess = payload => ({
  type: REQUEST_API_GENRE_SUCCESS,
  payload,
});
export const requestApiError = payload => ({type: REQUEST_API_ERROR, payload});

// for fetching trending movies and the top movie
export const fetchTrendingMovies = async dispatch => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${moviedbKey}`;
  dispatch(requestApi());
  try {
    const response = await fetch(URL);
    const {results} = await response.json();
    dispatch(requestApiSuccess(results));
    dispatch(setFilteredMovies(results));
    dispatch(requestTopMovie(results[0].id));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};

// for fetching the genres of the movies
export const fetchGenreMovies = async dispatch => {
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${moviedbKey}&language=en-US`;
  dispatch(requestApi());
  try {
    const response = await fetch(URL);
    const {genres} = await response.json();
    dispatch(requestApiGenreSuccess(genres));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};
