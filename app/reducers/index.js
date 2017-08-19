import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {STARTING_ARTICLES_REQUEST, FINISHED_ARTICLES_REQUEST, STARTING_ARTICLES_BODY_REQUEST, FINISHED_ARTICLES_BODY_REQUEST} from '../actions/index'

const returnArticlesArray = (article, index, articles) => {
  for (var store_articles of articles) {
    if (index === store_articles.index)
      return [...articles]
  }
  return [
    ...articles, {
      index,
      ...article
    }
  ]
}

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
        articles: returnArticlesArray(article, action.index, state.articles)
      });

    default:
      return state
  }
}

const articlesHeaders = (state = {
  page: 0,
  headers: []
}, action) => {
  console.log(state);
  switch (action.type) {
    case STARTING_ARTICLES_REQUEST:
      return Object.assign({}, state, {fetching_articles: true});

    case FINISHED_ARTICLES_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching_articles: false,
        page: state.page + 1,
        headers: [
          ...articles
        ]
      });

    default:
      return state
  }
}

const rootReducer = combineReducers({routing, articlesHeaders, readArticles});

export default rootReducer;
