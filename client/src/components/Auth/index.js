import React from 'react';
import Login from './login/login';

export default ({ type }) => {
    if(type === "LOGIN"){
        return <div>
            <Login />
        </div>
    }
    // if(type === "SIGNUP"){
    //     return <div>
    //         <SignUp />
    //     </div>
    // }
}