import {STARTING_STARS_REQUEST, FINISHED_STARS_REQUEST} from '../actions/const'
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
        page: state.page + 1,
        stars: [...articles]
      });

    default:
      return state;
  }
}
export default starsReducer;
