import {STARTING_NEWS_REQUEST, FINISHED_NEWS_REQUEST} from '../actions/const'
const initialState = {
  fetching: false,
  page: 0,
  news: []
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTING_NEWS_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case FINISHED_NEWS_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching: false,
        page: state.page + 1,
        news: [...articles]
      });

    default:
      return state;
  }
}
export default newsReducer;