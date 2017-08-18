import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {STARTING_ARTICLES_REQUEST, FINISHED_ARTICLES_REQUEST} from '../actions/index'

const articles = (state = {}, action) => {
  switch (action.type) {
    case STARTING_ARTICLES_REQUEST:
      return Object.assign({}, state, {fetching: true});
    case FINISHED_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        fetching: false,
        data: action.response.data.articles
      });
    default:
      return state
  }
}

const rootReducer = combineReducers({routing, articles});

export default rootReducer;
