export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'
export const STARTING_ARTICLES_BODY_REQUEST = 'STARTING_ARTICLES_BODY_REQUEST'
export const FINISHED_ARTICLES_BODY_REQUEST = 'FINISHED_ARTICLES_BODY_REQUEST'

export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_REQUEST, response}
}

export const startingArticleBodyRequest = () => {
  return {type: STARTING_ARTICLES_BODY_REQUEST}
}

export const finishedArticleBodyRequest = (response = {}, index) => {
  return {type: FINISHED_ARTICLES_BODY_REQUEST, response, index}
}

export const setRequest = (body) => {
  let request = new XMLHttpRequest();
  request.open("POST",'http://localhost:9090/https://mobileapi.wp.pl/v1/graphql', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(body);
  return request;
}
