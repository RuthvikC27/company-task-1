import React from 'react';
import Login from './login';
import Register from './register';

const Auth = ({ type }) => {
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

export default Auth