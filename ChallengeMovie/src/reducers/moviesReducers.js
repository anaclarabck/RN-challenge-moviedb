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
} from '../actions/types';

const INITIAL_STATE = {
  trendingMovies: [],
  topMovie: '',
  filteredMovies: [],
  isLoadingTrending: false,
  isLoadingSearch: false,
  errorStatusTrending: '',
  errorStatusSearch: '',
  errorTrending: '',
  errorSearch: '',
  moviesFound: true,
  splashScreen: true,
};

function movies(state = INITIAL_STATE, action) {
  const {payload, type} = action;
  switch (type) {
    case FETCH_TRENDING:
      return {...state, isLoadingTrending: true};
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        trendingMovies: payload,
        filteredMovies: payload,
        topMovie: payload[0].id,
        errorStatusTrending: '',
        isLoadingTrending: false,
        moviesFound: true,
        splashScreen: false,
      };
    case FETCH_TRENDING_ERROR:
      return {
        ...state,
        errorTrending: payload,
        isLoadingTrending: false,
        splashScreen: false,
      };
    case FETCH_SEARCH:
      return {...state, isLoadingSearch: true};
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        filteredMovies: payload,
        errorStatusSearch: '',
        isLoadingSearch: false,
        moviesFound: true,
      };
    case FETCH_SEARCH_ERROR:
      return {...state, errorSearch: payload, isLoadingSearch: false};
    case REMOVE_ID_FILTERED_MOVIES:
      return {
        ...state,
        filteredMovies: state.trendingMovies.filter(el => el.id !== payload),
      };
    case SET_FILTERED_MOVIES:
      return {...state, filteredMovies: payload};
    case SET_MOVIES_FOUND: // returns false when the search return an empty array
      return {...state, moviesFound: payload};
    case SET_RESPONSE_ERROR_TRENDING:
      return {...state, errorStatusTrending: payload, isLoadingTrending: false};
    case SET_RESPONSE_ERROR_SEARCH:
      return {...state, errorStatusSearch: payload, isLoadingSearch: false};
    default:
      return state;
  }
}

export default movies;
