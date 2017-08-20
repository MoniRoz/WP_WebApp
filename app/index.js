import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {configureStore, history} from './store/configureStore';
import Root from './containers/Root';
import {getNews} from './actions/GetNews'
import {getTech} from './actions/GetTech'
import {getStars} from './actions/GetStars'
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(getNews());
store.dispatch(getTech());
store.dispatch(getStars());
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
