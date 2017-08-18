// var req = new XMLHttpRequest();
// req.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
// req.setRequestHeader("Content-Type", "application/graphql");
// req.send("{articles(service:Wiadomosci,t:Article){url}}");
const ARTICLE_QUERY = "query getArticles($limit: Int, $service: [ServiceName],$type: [ArticleType]!) {articles(limit: $limit, service:$service,t: $type) {url title}}"

export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'

export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_REQUEST, response}
}

export const fetchArticles = (limit = 10, service = ["Wiadomosci"], type = ["Article"]) => {
  return dispatch => {
    dispatch(startingRequest());
    let request = new XMLHttpRequest();
    request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({
      "query": ARTICLE_QUERY,
      "variables": {
        "limit": limit,
        "service": service,
        "type": type
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
