import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Auth from './Auth';
import ProtectedRoute from '../protected-routes/protected-routes';
import Dashboard from './Dashboard';
import Listusers from './Dashboard/common/List-users';

export default () => {

    return <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/login"
                    component={() => <Auth type="LOGIN" />}
                ></Route>
                <Route path="/register" component={() => <Auth type="REGISTER" />}></Route>
                <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
                <ProtectedRoute path="/list-users" component={Listusers}></ProtectedRoute>
            </Switch>
        </Router>
    </React.Fragment>
}

