import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {STARTING_ARTICLES_REQUEST, FINISHED_ARTICLES_REQUEST} from '../actions/Types'

const articles = (state = {
  amount: 0,
  data: []
}, action) => {
  switch (action.type) {
    case STARTING_ARTICLES_REQUEST:
      return Object.assign({}, state, {fetching_articles: true});

    case FINISHED_ARTICLES_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching_articles: false,
        amount: state.amount + articles.length,
        data: [
          ...state.data,
          ...articles
        ]
      });

    default:
      return state
  }
}

const rootReducer = combineReducers({routing, articles});

export default rootReducer;
