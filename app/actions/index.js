// var req = new XMLHttpRequest();
// req.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
// req.setRequestHeader("Content-Type", "application/graphql");
// req.send("{articles(service:Wiadomosci,t:Article){url}}");
export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'

export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_REQUEST, response}
}

export const fetchArticles = (type = ['Article'], limit = 10) => {
  return dispatch => {
    dispatch(startingRequest());
    let request = new XMLHttpRequest();
    request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
    request.setRequestHeader("Content-Type", "application/graphql");
    request.send("{articles(service:Wiadomosci,t:Article){url, title}}");
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedRequest(JSON.parse(request.response)));
      }
    }
  }
}
