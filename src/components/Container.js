import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import ErrorScreen from './ErrorScreen';


class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageType, pageId, title, children, modal,
      actions, error
    } = this.props;

    return (
      <div className="container">
        <Header {...{title}}/>
 
          {error && <ErrorScreen />}
          {children}
  
      </div>
    )
  }
}


export default Container;