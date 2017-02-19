import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';
import App from './containers/App';
import Offices from './containers/Offices';

import './styles/main.less';

injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(hashHistory, store)}>
      <Route path="/" component={App}>
        <IndexRedirect to="offices" />
        <Route path="/offices" component={Offices} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
