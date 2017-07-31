import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import RouterManager from '../routes.js';

import { syncHistoryWithStore, push } from 'react-router-redux';
import {browserHistory, Router} from 'react-router';
import { getRoutes } from '../routes.js';


import './app.css';
import Container from '../components/Container'

const store = configureStore(store);
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history} routes={getRoutes(store)}/>
        </Provider>
  
      </div>
    );
  }
}

export default App;
