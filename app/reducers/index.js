import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {STARTING_ARTICLES_REQUEST, FINISHED_ARTICLES_REQUEST, STARTING_ARTICLES_BODY_REQUEST, FINISHED_ARTICLES_BODY_REQUEST} from '../actions/index'

const readArticles = (state = {
  articles: []
}, action) => {
  switch (action.type) {
    case STARTING_ARTICLES_BODY_REQUEST:
      return Object.assign({}, state, {fetching_body: true});

    case FINISHED_ARTICLES_BODY_REQUEST:
      let article = action.response.data.article
      return Object.assign({}, state, {
        fetching_body: false,
        articles: [
          ...state.articles,
          article
        ]
      });

    default:
      return state
  }
}

const articlesHeaders = (state = {
  amount: 0,
  headers: []
}, action) => {
  switch (action.type) {
    case STARTING_ARTICLES_REQUEST:
      return Object.assign({}, state, {fetching_articles: true});

    case FINISHED_ARTICLES_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching_articles: false,
        amount: state.amount + articles.length,
        headers: [
          ...state.headers,
          ...articles
        ]
      });

    default:
      return state
  }
}

const rootReducer = combineReducers({routing, articlesHeaders, readArticles});

export default rootReducer;
