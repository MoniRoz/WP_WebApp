import {STARTING_ARTICLES_BODY_REQUEST, FINISHED_ARTICLES_BODY_REQUEST} from '../actions/const';

const initialState = {
  fetching: false,
  articles: []
}

const returnArticlesArray = (article, id, articles) => {
  for (var store_articles of articles) {
    if (id === store_articles.id)
      return [...articles]
  }
  return [
    ...articles, {
      ...article
    }
  ]
}
const readArticles = (state = initialState, action) => {
  switch (action.type) {
    case STARTING_ARTICLES_BODY_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case FINISHED_ARTICLES_BODY_REQUEST:
      let article = action.response.data.article
      return Object.assign({}, state, {
        fetching: false,
        articles: returnArticlesArray(article, article.id, state.articles)
      });

    default:
      return state
  }
}

export default readArticles
