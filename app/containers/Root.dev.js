import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import DevTools from './DevTools';
import PageContainer from './PageContainer';
import PageArticle from './PageArticle'

export default function Root({store, history}) {
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={PageContainer}/>
            <Route path="/article/:index" component={PageArticle}/>
          </Switch>
        </ConnectedRouter>
        <DevTools/>
      </div>
    </Provider>

  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
