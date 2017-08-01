import React, { Component } from 'react';

import Avatar from '../Avatar';
import {Row, Col } from 'react-flexbox-grid';

import './user.css'

class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='user-card'>
                <div className='avatar-wrp'>
                    <Avatar self big/>
                </div>
                <div className='user-card-data'>
                    <h5>User Name</h5>
                    <div className='user-card-rank'><i className='icon-target'></i>8411</div>
                    <div className='user-card-stat'><i className='icon-stats-dots'></i>454-201 | <b>74%</b></div>
                    <div className='user-card-actions'>
                        <ul>
                            <li><a href="#"><i className='icon-user'></i></a></li>
                            <li><a href="#"><i className='icon-bullhorn'></i></a></li>
                            <li><a href="#"><i className='icon-switch'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default UserCard;