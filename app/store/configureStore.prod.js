import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(middleware, thunk)));

  return store;
}
