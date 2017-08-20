import {
  startingRequest,
  finishedRequest,
  cleaReadArticles,
  logError,
  setRequest,
  ARTICLES_BASE_QUERY
} from './const'

export const getServicesArticles = (service, page) => {
  return dispatch => {
    dispatch(startingRequest(service));
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
        "service": service
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          dispatch(finishedRequest(JSON.parse(request.response), service, page));
        } else
          dispatch(logError(service));
        }
      }
  }
}
