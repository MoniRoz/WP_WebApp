import {STARTING_TECH_REQUEST, FINISHED_TECH_REQUEST, ERROR_TECH_REQUEST} from '../actions/const'
const initialState = {
  fetching: false,
  page: 0,
  error: false,
  tech: []
}

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTING_TECH_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case FINISHED_TECH_REQUEST:
      let articles = action.response.data.articles
      return Object.assign({}, state, {
        fetching: false,
        page: state.page + 1,
        tech: [...articles]
      });

    case ERROR_TECH_REQUEST:
      return Object.assign({}, state, {
        fetching: false,
        error: true
      });

    default:
      return state;
  }
}
export default techReducer;
