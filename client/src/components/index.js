import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth';

export default () => {
    return <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/login" component={() => <Auth type="LOGIN"/>}></Route>
                <Route exact path="/register" component={() => <Auth type="REGISTER"/>}></Route>
            </Switch>
        </Router>
    </React.Fragment>
}