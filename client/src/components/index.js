import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import ProtectedRoute from '../protected-routes/protected-routes';
import Dashboard from './Dashboard';
import NotFoundError from './Not-found-error'; 

export default () => {

    return <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/login"
                    component={() => <Auth type="LOGIN" />}
                ></Route>
                <Route path="/register" component={() => <Auth type="REGISTER" />}></Route>
                <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
                <Route component={NotFoundError}></Route>
            </Switch>
        </Router>
    </React.Fragment>
}

