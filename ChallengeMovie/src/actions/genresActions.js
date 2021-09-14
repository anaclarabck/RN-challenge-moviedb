import {moviedbKey} from '../services/moviedbKey';

import {
  FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  SET_RESPONSE_ERROR_GENRES,
} from './types';

export const fetchGenres = payload => ({
  type: FETCH_GENRES,
  payload,
});
export const fetchGenresSuccess = payload => ({
  type: FETCH_GENRES_SUCCESS,
  payload,
});
export const fetchGenresError = payload => ({
  type: FETCH_GENRES_ERROR,
  payload,
});
export const setResponseErrorGenres = payload => ({
  type: SET_RESPONSE_ERROR_GENRES,
  payload,
});

// for fetching the genres of the movies
export const fetchGenreMovies = async dispatch => {
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${moviedbKey}&language=en-US`;
  dispatch(fetchGenres());
  try {
    const response = await fetch(URL);
    if (response.status === 200) {
      const {genres} = await response.json();
      dispatch(fetchGenresSuccess(genres));
    } else {
      dispatch(setResponseErrorGenres(response.status_message));
    }
  } catch (error) {
    dispatch(fetchGenresError(error));
  }
};
