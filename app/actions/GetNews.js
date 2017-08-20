import {startingNewsRequest, finishedNewsRequest, setRequest, ARTICLES_BASE_QUERY} from './const'

export const getNews = () => {
  return dispatch => {
    dispatch(startingNewsRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
        "service": "Wiadomosci"
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedNewsRequest(JSON.parse(request.response)));
      }
    }
  }
}
