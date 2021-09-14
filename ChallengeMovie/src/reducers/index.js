import {combineReducers} from 'redux';
import movies from './moviesReducers';
import genres from './genresReducers';

const rootReducer = combineReducers({movies, genres});

export default rootReducer;
