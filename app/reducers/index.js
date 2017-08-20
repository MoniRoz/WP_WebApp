import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import readArticles from './ReadArticles'
import newsReducer from './NewsReducer';
import techReducer from './TechReducer';
import starsReducer from './StarsReducer';

export const returnPageNumber = (number, page) => {
  switch (number) {
    case 0:
      return 0;
    case 1:
      return page + 1;
    case - 1:
      return (page <= 0)
        ? page
        : (page - 1)
  }
}

const rootReducer = combineReducers({routing, newsReducer, techReducer, starsReducer, readArticles});

export default rootReducer;
