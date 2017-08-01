import React, { Component } from 'react';
import Container from '../components/Container';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    sideBarStatus() {
        return true
    }

    render() {
        return (
          <Container title="Dashboard" sidebar={this.sideBarStatus()}>
            <h1>Dashboard</h1>
          </Container>  
        );
    }
}