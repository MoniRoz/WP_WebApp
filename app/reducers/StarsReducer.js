import {STARTING_STARS_REQUEST, FINISHED_STARS_REQUEST, ERROR_STARS_REQUEST} from '../actions/const';
import {returnPageNumber} from './index';

const initialState = {
  fetching: false,
  page: 0,
  stars: []
}

const starsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTING_STARS_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case FINISHED_STARS_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching: false,
        page: returnPageNumber(action.page, state.page),
        stars: [...articles]
      });
    case ERROR_STARS_REQUEST:
      return Object.assign({}, state, {fetching: false});

    default:
      return state;
  }
}
export default starsReducer;
