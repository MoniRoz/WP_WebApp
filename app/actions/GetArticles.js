import {startingRequest, finishedRequest, setRequest} from './index'
const ARTICLES_BASE_QUERY = "{articles(limit:10,service:[Wiadomosci],t:[Article]){id url title}}"

export const fetchArticles = () => {
  return dispatch => {
    dispatch(startingRequest());
    let request = setRequest(JSON.stringify({"query": ARTICLES_BASE_QUERY}));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
