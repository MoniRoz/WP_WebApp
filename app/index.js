import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {configureStore, history} from './store/configureStore';
import Root from './containers/Root';
import {getServicesArticles} from './actions/GetServicesArticles'
import 'bootstrap/dist/css/bootstrap.css';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = configureStore(persistedState);

store.dispatch(getServicesArticles("Wiadomosci", 0));
store.dispatch(getServicesArticles("Tech", 0));
store.dispatch(getServicesArticles("Gwiazdy", 0));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

render(
  <AppContainer>
  <Root store={store} history={history}/>
</AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const newConfigureStore = require('./store/configureStore');
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
      <NewRoot store={newStore} history={newHistory}/>
    </AppContainer>, document.getElementById('root'));
  });
}
