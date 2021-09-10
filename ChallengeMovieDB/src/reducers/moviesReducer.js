import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_GENRE_SUCCESS,
  REQUEST_API_ERROR,
  SET_FILTERED_MOVIES,
} from '../actions';

const INITIAL_STATE = {
  movies: [],
  filteredMovies: [],
  genres: [],
  isLoading: false,
};

function moviesReducer(state = INITIAL_STATE, action) {
  const {payload, type} = action;
  switch (type) {
    case REQUEST_API:
      return {...state, isLoading: true};
    case REQUEST_API_SUCCESS:
      return {...state, movies: payload, isLoading: false};
    case REQUEST_API_GENRE_SUCCESS:
      return {...state, genres: payload, isLoading: false};
    case REQUEST_API_ERROR:
      return {...state, error: payload, isLoading: false};
    case SET_FILTERED_MOVIES:
      return {...state, filteredMovies: payload, isLoading: false};
    default:
      return state;
  }
}

export default moviesReducer;
