import {startingRequest, finishedRequest, setRequest,cleaReadArticles, LOAD_MORE_ARTICLES_QUERY} from './const';

export const loadArticles = (offset = 0, service, page = 1) => {
  return dispatch => {
    dispatch(startingRequest(service));
    let request = setRequest(JSON.stringify({
      "query": LOAD_MORE_ARTICLES_QUERY,
      "variables": {
        "offset": offset,
        "service": service
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          dispatch(cleaReadArticles(service));
          dispatch(finishedRequest(JSON.parse(request.response), service, page));
        } else
          dispatch(logError(service));
        }
      }
  }
}
