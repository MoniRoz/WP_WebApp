import {STARTING_ARTICLES_BODY_REQUEST, FINISHED_ARTICLES_BODY_REQUEST, CLEAR_ARTICLES} from '../actions/const';

const initialState = {
  fetching: false,
  articles: []
}

const returnArticlesArray = (article, id, articles, service) => {
  for (var store_articles of articles) {
    if (id === store_articles.id)
      return [...articles]
  }
  return [
    ...articles, {
      service,
      ...article
    }
  ]
}

const clearProperServices = (articles, service) => {
  var newArray = []
  for (var article of articles) {
    if (article.service !== service)
      newArray.push(article)
  }
  return newArray
}

const readArticles = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ARTICLES:
      return Object.assign({}, state, {
        articles: clearProperServices(state.articles, action.service)
      });

    case STARTING_ARTICLES_BODY_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case FINISHED_ARTICLES_BODY_REQUEST:
      let article = action.response.data.article;
      return Object.assign({}, state, {
        fetching: false,
        articles: returnArticlesArray(article, article.id, state.articles, action.service)
      });

    default:
      return state
  }
}

export default readArticles
