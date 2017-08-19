import {startingArticleBodyRequest, finishedArticleBodyRequest, setRequest} from './index'

const ARTICLE_BODY_QUERY = "query GetArticleBody($url: String!){article(url:$url){title body{data}}}"

export const getArticleBody = (url,index) => {
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
        dispatch(finishedArticleBodyRequest(JSON.parse(request.response),index));
      }
    }
  }
}
