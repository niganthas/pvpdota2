import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { getRoutes } from '../routes.js';

import { syncHistoryWithStore, push } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';


import './app.css';
import Container from '../components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container></Container>
      </div>
    );
  }
}

export default App;
