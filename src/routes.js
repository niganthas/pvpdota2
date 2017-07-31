import React from 'react';
import {Route, Switch, NoMatch} from 'react-router';
import {push} from 'react-router-redux';

import Dashboard from './containers/Dashboard'

export const getRouters = (store, auth) => {
    
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
        </Switch>
    )
}

