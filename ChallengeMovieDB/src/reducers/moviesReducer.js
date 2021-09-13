import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_GENRE_SUCCESS,
  REQUEST_API_ERROR,
  SET_FILTERED_MOVIES,
  FILTER_MOVIES,
  GET_TOP_MOVIE,
} from '../actions';

const INITIAL_STATE = {
  movies: [],
  topMovie: '',
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
    case FILTER_MOVIES:
      return {
        ...state,
        filteredMovies: state.movies.filter(el => el.id !== payload),
      };
    case GET_TOP_MOVIE:
      return {...state, topMovie: payload};
    default:
      return state;
  }
}

export default moviesReducer;
