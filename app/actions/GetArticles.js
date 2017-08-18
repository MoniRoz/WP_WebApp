import {startingRequest, finishedRequest} from './Types'
const ARTICLES_BASE_QUERY = "{articles(limit:10,service:[Wiadomosci],t:[Article]){url title}}"

export const fetchArticles = () => {
  return dispatch => {
    dispatch(startingRequest());
    let request = new XMLHttpRequest();
    request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({"query": ARTICLES_BASE_QUERY}));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
