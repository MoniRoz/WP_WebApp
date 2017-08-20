import {startingTechRequest, finishedTechRequest, setRequest, ARTICLES_BASE_QUERY} from './const'

export const getTech = () => {
  return dispatch => {
    dispatch(startingTechRequest());
    let request = setRequest(JSON.stringify({
      "query": ARTICLES_BASE_QUERY,
      "variables": {
        "service": "Tech"
      }
    }));
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        dispatch(finishedTechRequest(JSON.parse(request.response)));
      }
    }
  }
}
