import React, { Component } from 'react';
import { Link } from 'react-router'

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
                        <a href="/">p<span>v</span>p</a>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li><Link to="/">Dashboard</Link></li> 
                            <li><Link to="/matches">Matches</Link></li> 
                            <li><a href="#">Tournaments</a></li> 
                            <li><a href="#">Information</a></li> 
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}