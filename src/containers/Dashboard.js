import React, { Component } from 'react';
import Container from '../components/Container';
import UserCard from '../components/user/UserCard'
import UserGameList from '../components/gamelist/UserGameList'
import CurrentGameList from '../components/gamelist/CurrentGameList'

import {Row, Col } from 'react-flexbox-grid';

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
           
                <Row>
                    <Col xs={6}>
                        <UserCard/>
                    </Col>
                    <Col xs={6}>
                        <div>Events be here</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}><UserGameList/></Col>
                    <Col xs={6}><CurrentGameList/></Col>
                </Row>
            <Row>

            </Row>
          </Container>  
        );
    }
}