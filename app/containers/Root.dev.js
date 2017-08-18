import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import DevTools from './DevTools';
import ArticleListContainer from './ArticleListContainer';

export default function Root({store, history}) {
  return (
    <Provider store={store}>
      <div>
        <ArticleListContainer/>
        <DevTools/>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
