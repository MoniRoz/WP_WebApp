import {startingRequest, finishedRequest, setRequest, ARTICLES_BASE_QUERY} from './const'

export const getServicesArticles = (service) => {
  return dispatch => {
    dispatch(startingRequest(), service);
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
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
