/*
* querys
*/
export const ARTICLES_BASE_QUERY = "query GetArticle($service:ServiceName){articles(limit:5,service:[$service],t:[Article]){id ts url title img{url}}}"

export const ARTICLE_BODY_QUERY = "query GetArticleBody($url: String!){article(url:$url){id title img{url} body{data t}}}"

const LOAD_MORE_ARTICLES_QUERY = "query getArticles($offset: Int) {articles(offset: $offset, limit: 5, service: [Wiadomosci],t: [Article]) {id ts url title img{url}}}"

/*
* requests
*/

export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'
export const STARTING_ARTICLES_BODY_REQUEST = 'STARTING_ARTICLES_BODY_REQUEST'
export const FINISHED_ARTICLES_BODY_REQUEST = 'FINISHED_ARTICLES_BODY_REQUEST'

export const STARTING_NEWS_REQUEST = 'STARTING_NEWS_REQUEST'
export const FINISHED_NEWS_REQUEST = 'FINISHED_NEWS_REQUEST'

export const STARTING_TECH_REQUEST = 'STARTING_TECH_REQUEST'
export const FINISHED_TECH_REQUEST = 'FINISHED_TECH_REQUEST'

export const STARTING_STARS_REQUEST = 'STARTING_STARS_REQUEST'
export const FINISHED_STARS_REQUEST = 'FINISHED_STARS_REQUEST'

/*
*  actions
*/
export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}, service = "Wiadomosci") => {
  return {type: FINISHED_ARTICLES_REQUEST, response, service}
}

export const startingArticleBodyRequest = () => {
  return {type: STARTING_ARTICLES_BODY_REQUEST}
}

export const finishedArticleBodyRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_BODY_REQUEST, response}
}

export const startingNewsRequest = () => {
  return {type: STARTING_NEWS_REQUEST}
}

export const finishedNewsRequest = (response = {}) => {
  return {type: FINISHED_NEWS_REQUEST, response}
}

export const startingTechRequest = () => {
  return {type: STARTING_TECH_REQUEST}
}

export const finishedTechRequest = (response = {}) => {
  return {type: FINISHED_TECH_REQUEST, response}
}

export const startingStarsRequest = () => {
  return {type: STARTING_STARS_REQUEST}
}

export const finishedStarsRequest = (response = {}) => {
  return {type: FINISHED_STARS_REQUEST, response}
}

export const setRequest = (body) => {
  let request = new XMLHttpRequest();
  request.open("POST", 'http://localhost:9090/https://mobileapi.wp.pl/v1/graphql', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(body);
  return request;
}
