/*
* querys
*/
export const ARTICLES_BASE_QUERY = "query GetArticle($service:ServiceName){articles(limit:5,service:[$service],t:[Article]){id ts url title img{url}}}"

export const ARTICLE_BODY_QUERY = "query GetArticleBody($url: String!){article(url:$url){id title img{url} body{data}}}"

export const LOAD_MORE_ARTICLES_QUERY = "query getArticles($offset: Int,$service:ServiceName) {articles(offset: $offset, limit: 5, service: [$service],t: [Article]) {id ts url title img{url}}}"

/*
* requests
*/
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES'

export const STARTING_ARTICLES_BODY_REQUEST = 'STARTING_ARTICLES_BODY_REQUEST'
export const FINISHED_ARTICLES_BODY_REQUEST = 'FINISHED_ARTICLES_BODY_REQUEST'
export const ERROR_ARTICLES_BODY_REQUEST = 'ERROR_ARTICLES_BODY_REQUEST'

export const STARTING_NEWS_REQUEST = 'STARTING_NEWS_REQUEST'
export const FINISHED_NEWS_REQUEST = 'FINISHED_NEWS_REQUEST'
export const ERROR_NEWS_REQUEST = 'ERROR_NEWS_REQUEST'

export const STARTING_TECH_REQUEST = 'STARTING_TECH_REQUEST'
export const FINISHED_TECH_REQUEST = 'FINISHED_TECH_REQUEST'
export const ERROR_TECH_REQUEST = 'ERROR_TECH_REQUEST'

export const STARTING_STARS_REQUEST = 'STARTING_STARS_REQUEST'
export const FINISHED_STARS_REQUEST = 'FINISHED_STARS_REQUEST'
export const ERROR_STARS_REQUEST = 'ERROR_STARS_REQUEST'

/*
*  actions
*/
export const startingRequest = (service = "Wiadomosci") => {
  switch (service) {
    case "Wiadomosci":
      return {type: STARTING_NEWS_REQUEST};
    case "Tech":
      return {type: STARTING_TECH_REQUEST};
    case "Gwiazdy":
      return {type: STARTING_STARS_REQUEST};
  }
}

export const finishedRequest = (response = {}, service = "Wiadomosci", page = 0) => {
  switch (service) {
    case "Wiadomosci":
      return {type: FINISHED_NEWS_REQUEST, response, page}
    case "Tech":
      return {type: FINISHED_TECH_REQUEST, response, page}
    case "Gwiazdy":
      return {type: FINISHED_STARS_REQUEST, response, page}
  }
}

export const startingArticleBodyRequest = () => {
  return {type: STARTING_ARTICLES_BODY_REQUEST}
}

export const finishedArticleBodyRequest = (response = {}, service) => {
  return {type: FINISHED_ARTICLES_BODY_REQUEST, response, service}
}

export const cleaReadArticles = (service) => {
  return {type: CLEAR_ARTICLES, service}
}

export const logError = (service) => {
  switch (service) {
    case "Wiadomosci":
      return {type: ERROR_NEWS_REQUEST}
    case "Tech":
      return {type: ERROR_TECH_REQUEST}
    case "Gwiazdy":
      return {type: ERROR_STARS_REQUEST}
  }
}

export const logLoadArticleBodyError = () => {
  return {type: ERROR_ARTICLES_BODY_REQUEST}
}

export const setRequest = (body) => {
  let request = new XMLHttpRequest();
  request.open("POST", 'https://cors-anywhere.herokuapp.com/https://mobileapi.wp.pl/v1/graphql', true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(body);
  return request;
}
