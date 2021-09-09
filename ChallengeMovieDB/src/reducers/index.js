import {combineReducers} from 'redux';
import movieListReducer from './movieList';

const rootReducer = combineReducers({movieListReducer});

export default rootReducer;
