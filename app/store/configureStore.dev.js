import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(middleware, thunk), DevTools.instrument(), (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined')
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
