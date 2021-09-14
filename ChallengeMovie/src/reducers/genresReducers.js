import {
  FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  SET_RESPONSE_ERROR_GENRES,
} from '../actions/types';

const INITIAL_STATE = {
  genres: [],
  isLoading: false,
  errorGenre: '',
  errorStatusGenre: '',
};

function genres(state = INITIAL_STATE, action) {
  const {payload, type} = action;
  switch (type) {
    case FETCH_GENRES:
      return {...state, isLoading: true};
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload,
        errorGenre: '',
        errorStatusGenre: '',
        isLoading: false,
      };
    case FETCH_GENRES_ERROR:
      return {...state, errorGenre: payload, isLoading: false};
    case SET_RESPONSE_ERROR_GENRES:
      return {...state, errorStatusGenre: payload, isLoading: false};
    default:
      return state;
  }
}

export default genres;
