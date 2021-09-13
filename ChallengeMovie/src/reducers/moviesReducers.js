import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_GENRE_SUCCESS,
  REQUEST_TOP_MOVIE,
  REQUEST_API_ERROR,
  SET_FILTERED_MOVIES,
  FILTER_MOVIES,
} from '../actions';

const INITIAL_STATE = {
  trendingMovies: [],
  topMovie: '',
  genres: [],
  filteredMovies: [],
  isLoading: false,
};

function movies(state = INITIAL_STATE, action) {
  const {payload, type} = action;
  switch (type) {
    case REQUEST_API:
      return {...state, isLoading: true};
    case REQUEST_API_SUCCESS:
      return {...state, trendingMovies: payload, isLoading: false};
    case REQUEST_API_GENRE_SUCCESS:
      return {...state, genres: payload, isLoading: false};
    case REQUEST_API_ERROR:
      return {...state, error: payload, isLoading: false};
    case SET_FILTERED_MOVIES:
      return {...state, filteredMovies: payload, isLoading: false};
    case REQUEST_TOP_MOVIE:
      return {...state, topMovie: payload};
    case FILTER_MOVIES:
      return {
        ...state,
        filteredMovies: state.trendingMovies.filter(el => el.id !== payload),
      };
    default:
      return state;
  }
}

export default movies;
