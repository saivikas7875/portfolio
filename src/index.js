import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
