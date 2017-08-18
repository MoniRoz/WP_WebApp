export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'

export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_REQUEST, response}
}

export const setRequest = (body) => {
  let request = new XMLHttpRequest();
  request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(body);
  return request;
}
