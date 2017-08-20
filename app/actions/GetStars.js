import {startingStarsRequest, finishedStarsRequest, setRequest, ARTICLES_BASE_QUERY} from './const'

export const getStars = () => {
  return dispatch => {
    dispatch(startingStarsRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
        "service": "Gwiazdy"
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedStarsRequest(JSON.parse(request.response)));
      }
    }
  }
}
