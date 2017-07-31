import React, {Component} from 'react';
import { connect } from "react-redux";
import {Route, IndexRoute, NoMatch} from 'react-router';
import {push} from 'react-router-redux';

import Dashboard from './containers/Dashboard'
import Matches from './containers/Matches'

export const getRoutes = (store, auth) => {
    return (
        <Route path="/">
            <Route>
                <IndexRoute component={Dashboard} />
                <Route path="/matches" component={Matches}/>
            </Route>
        </Route>
    )
}


    
