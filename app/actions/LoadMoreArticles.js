import {startingRequest, finishedRequest, setRequest, LOAD_MORE_ARTICLES_QUERY} from './const';

export const loadMoreArticles = (offset = 0, service) => {
  return dispatch => {
    dispatch(startingRequest(), service);
    let request = setRequest(JSON.stringify({
      "query": LOAD_MORE_ARTICLES_QUERY,
      "variables": {
        "offset": offset,
        "service": service
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response),service));
      }
    }
  }
}
