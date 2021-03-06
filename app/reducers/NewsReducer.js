import {STARTING_NEWS_REQUEST, FINISHED_NEWS_REQUEST, ERROR_NEWS_REQUEST} from '../actions/const';
import {returnPageNumber} from './index';

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
      let articles = action.response.data.articles;
      return Object.assign({}, state, {
        fetching: false,
        page: returnPageNumber(action.page, state.page),
        news: [...articles]
      });

    case ERROR_NEWS_REQUEST:
      return Object.assign({}, state, {
        fetching: false
      });

    default:
      return state;
  }
}
export default newsReducer;
