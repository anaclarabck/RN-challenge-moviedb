import {REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_ERROR} from '../actions';

const INITIAL_STATE = {
  movieList: '',
  isLoading: false,
};

function movieListReducer(state = INITIAL_STATE, action) {
  const {payload, type} = action;
  switch (type) {
    case REQUEST_API:
      return {...state, isLoading: true};
    case REQUEST_API_SUCCESS:
      return {...state, movieList: payload.results, isLoading: false};
    case REQUEST_API_ERROR:
      return {...state, error: payload, isLoading: false};
    default:
      return state;
  }
}

export default movieListReducer;
