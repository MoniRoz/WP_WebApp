export const STARTING_ARTICLES_REQUEST = 'STARTING_ARTICLES_REQUEST'
export const FINISHED_ARTICLES_REQUEST = 'FINISHED_ARTICLES_REQUEST'

export const startingRequest = () => {
  return {type: STARTING_ARTICLES_REQUEST}
}

export const finishedRequest = (response = {}) => {
  return {type: FINISHED_ARTICLES_REQUEST, response}
}
