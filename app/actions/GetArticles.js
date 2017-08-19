import {startingRequest, finishedRequest, setRequest} from './index'
const ARTICLES_BASE_QUERY = "query GetArticle($service:ServiceName){articles(limit:5,service:[$service],t:[Article]){id ts url title img{url}}}"

export const fetchArticles = (services) => {
  return dispatch => {
    dispatch(startingRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
        "service": services
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
