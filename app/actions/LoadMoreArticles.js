import {startingRequest, finishedRequest} from './Types';

const LOAD_MORE_ARTICLES_QUERY = "query getArticles($offset: Int) {articles(offset: $offset, limit: 10, service: [Wiadomosci],t: [Article]) {url title}}"

export const loadMoreArticles = (offset = 0) => {
  return dispatch => {
    dispatch(startingRequest());
    let request = new XMLHttpRequest();
    request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({
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
