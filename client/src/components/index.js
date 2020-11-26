import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import ProtectedRoute from '../protected-routes/protected-routes';
import Dashboard from './Dashboard';

export default () => {

    return <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/login"
                    component={() => <Auth type="LOGIN" />}
                ></Route>
                <Route exact path="/register" component={() => <Auth type="REGISTER" />}></Route>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}></ProtectedRoute>
            </Switch>
        </Router>
    </React.Fragment>
}

