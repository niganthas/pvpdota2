import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className='header-wrp'>
                <header className='header'>
                    <div className="logo">
                        <a href="/">pvp</a>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li><NavLink to="/">Dashboard</NavLink></li> 
                            <li><a href="#">Matches</a></li> 
                            <li><a href="#">Tournaments</a></li> 
                            <li><a href="#">Information</a></li> 
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}