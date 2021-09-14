import {moviedbKey} from '../services/moviedbKey';
import {
  FETCH_TRENDING,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR,
  FETCH_SEARCH,
  FETCH_SEARCH_ERROR,
  FETCH_SEARCH_SUCCESS,
  REMOVE_ID_FILTERED_MOVIES,
  SET_FILTERED_MOVIES,
  SET_MOVIES_FOUND,
  SET_RESPONSE_ERROR_TRENDING,
  SET_RESPONSE_ERROR_SEARCH,
} from './types';

export const fetchTrending = payload => ({type: FETCH_TRENDING, payload});
export const fetchTrendingSuccess = payload => ({
  type: FETCH_TRENDING_SUCCESS,
  payload,
});
export const fetchTrendingError = payload => ({
  type: FETCH_TRENDING_ERROR,
  payload,
});
export const fetchSearch = payload => ({type: FETCH_SEARCH, payload});
export const fetchSearchSuccess = payload => ({
  type: FETCH_SEARCH_SUCCESS,
  payload,
});
export const fetchSearchError = payload => ({
  type: FETCH_SEARCH_ERROR,
  payload,
});
export const removeIdFilteredMovies = payload => ({
  type: REMOVE_ID_FILTERED_MOVIES,
  payload,
});
export const setFilteredMovies = payload => ({
  type: SET_FILTERED_MOVIES,
  payload,
});
export const setMoviesFound = payload => ({type: SET_MOVIES_FOUND, payload});
export const setResponseErrorTrending = payload => ({
  type: SET_RESPONSE_ERROR_TRENDING,
  payload,
});
export const setResponseErrorSearch = payload => ({
  type: SET_RESPONSE_ERROR_SEARCH,
  payload,
});

// for fetching trending movies and the top movie
export const fetchTrendingMovies = async dispatch => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${moviedbKey}`;
  dispatch(fetchTrending());
  try {
    const response = await fetch(URL);
    if (response.status === 200) {
      const {results} = await response.json();
      dispatch(fetchTrendingSuccess(results));
    } else {
      dispatch(setResponseErrorTrending(response.status_message));
    }
  } catch (error) {
    dispatch(fetchTrendingError(error));
  }
};

// for searching movies
export const searchMovies = async (query, dispatch) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${moviedbKey}&language=en-US&query=${query}&page=1&include_adult=false`;
  dispatch(fetchSearch());
  try {
    const response = await fetch(URL);
    if (response.status === 200) {
      const {results} = await response.json();
      //  the ternary above is necessary, because if the fetch returns an empty array, we can treat it
      results.length > 0
        ? dispatch(fetchSearchSuccess(results))
        : dispatch(setMoviesFound(false));
    } else {
      dispatch(setResponseErrorSearch(response.status_message));
    }
  } catch (error) {
    dispatch(fetchSearchError(error));
  }
};
