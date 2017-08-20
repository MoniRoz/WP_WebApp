import {startingArticleBodyRequest, finishedArticleBodyRequest, setRequest, ARTICLE_BODY_QUERY} from './const'

export const getArticleBody = (url, service) => {
  return dispatch => {
    dispatch(startingArticleBodyRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLE_BODY_QUERY,
      "variables": {
        "url": url
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200)
          dispatch(finishedArticleBodyRequest(JSON.parse(request.response),service));
        }
      }
  }
}
