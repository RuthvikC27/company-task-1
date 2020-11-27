import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import axios from 'axios';

import classes from './index.module.css';
import LoadingImg from './spinner.svg';

const Listusers = ({ role, user }) => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios.defaults.headers.common['Authorize'] = 'Bearer' + localStorage.getItem('token');

        axios.get("/api/user/list-users")
            .then(res => {
                setCustomers(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.response.data.errors[0].msg);
                setLoading(false);
            })
    }, [])

    return (
        <React.Fragment>
            { error && <div className={classes.errorMsg}>{error}</div>}
            <Nav role={role}
                user={user} />
            <main>
                <ul>
                    {!error && <div className={classes.customerHeader}>
                        <h1>Customers list</h1>
                        <input className={classes.searchHeader} type="text" placeholder="Search user"/>
                    </div>}
                    {customers.length > 0 && customers.map(customer => {
                        return <li key={customer._id}>
                            <div className={classes.customerOne}>
                                <p>User : {customer.username}</p>
                                <p>Role : {customer.role}</p>
                            </div>
                        </li>
                    })}
                </ul>
                { loading && <div align="center">
                    <img src={LoadingImg} width="120" height="120" alt="spinner"/>
                    </div>}
                { error && customers.length === 0 &&<div className={classes.noCustomers}>No customers found!</div>}
            </main>
        </React.Fragment>
    );
};


export default Listusers;