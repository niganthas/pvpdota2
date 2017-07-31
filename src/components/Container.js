import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import ErrorScreen from './ErrorScreen';
import SideBar from '../components/sidebar/SideBar';


class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageType, pageId, title, children, modal,
      actions, error, sidebar
    } = this.props;

    return (
      <div className="container">
        <Header {...{title}}/>
          {<ErrorScreen />}
          {<SideBar />}
          <div className="inner-container">
            {children}
          </div>
      </div>
    )
  }
}


Container.propTypes = {
    connectionError: PropTypes.bool
};


export default Container;