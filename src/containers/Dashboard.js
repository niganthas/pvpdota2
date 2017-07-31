import React, { Component } from 'react';
import Container from '../components/Container';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container>
            <h1>Dashboard</h1>
          </Container>  
        );
    }
}