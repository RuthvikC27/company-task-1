import React from 'react';
import Login from './login';
import Register from './register';

export default ({ type }) => {
    if (type === "LOGIN") {
        return <div>
            <Login />
        </div>
    }
    if (type === "REGISTER") {
        return <div>
            <Register />
        </div>
    }
}