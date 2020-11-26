import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import axios from 'axios';

const Listusers = ({ role, user }) => {

    useEffect(() => {
        axios.defaults.headers.common['Authorize'] = 'Bearer' + localStorage.getItem('token');
                                
        axios.get("/api/user/list-users", {
            // headers: {
            //     authorize: localStorage.getItem('token')
            // }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data.errors)
        })
    }, [])

    return (
        <React.Fragment>
            <Nav role={role}
                user={user} />
        </React.Fragment>
    );
};


export default Listusers;