import {startingRequest, finishedRequest, setRequest} from './index';

const LOAD_MORE_ARTICLES_QUERY = "query getArticles($offset: Int) {articles(offset: $offset, limit: 5, service: [Wiadomosci],t: [Article]) {id url title img{url}}}"

export const loadMoreArticles = (offset = 0) => {
  return dispatch => {
    dispatch(startingRequest());
    let request = setRequest(JSON.stringify({
      "query": LOAD_MORE_ARTICLES_QUERY,
      "variables": {
        "offset": offset
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
