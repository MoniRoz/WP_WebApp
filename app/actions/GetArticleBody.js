import {startingArticleBodyRequest, finishedArticleBodyRequest, setRequest,ARTICLE_BODY_QUERY} from './const'

export const getArticleBody = (url) => {
  return dispatch => {
    dispatch(startingArticleBodyRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLE_BODY_QUERY,
      "variables": {
        "url": url
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedArticleBodyRequest(JSON.parse(request.response)));
      }
    }
  }
}
