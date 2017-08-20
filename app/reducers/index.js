import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import readArticles from './ReadArticles'
import newsReducer from './NewsReducer';
import techReducer from './TechReducer';
import starsReducer from './StarsReducer';

const rootReducer = combineReducers({routing, newsReducer, techReducer, starsReducer, readArticles});

export default rootReducer;
