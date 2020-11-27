import React, { useState, useEffect } from 'react';
import Nav from '../../common/Nav';
import axios from 'axios';

import classes from './index.module.css';
import LoadingImg from '../../images/spinner.svg';

const Listusers = ({ role, user }) => {
    const [loans, setLoans] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.defaults.headers.common['Authorize'] = 'Bearer' + localStorage.getItem('token');

        axios.get("/api/admin/all-loans")
            .then(res => {
                setLoans(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.response.data.errors[0].msg);
                setLoading(false);
            })
    }, [])

    const statusColor = (customer) => {
        if (customer.status === "New") {
            return <p className={classes.statusNew}>{customer.status}</p>
        }
        else if (customer.status === "Approved") {
            return <p className={classes.statusApproved}>{customer.status}</p>
        }
        else {
            return <p className={classes.statusRejected}>{customer.status}</p>
        }
    }

    const parseDate = (date) => {
        return date.split("T")[0];
    }

    return (
        <React.Fragment>
            { error && <div className={classes.errorMsg}>{error}</div>}
            <Nav role={role}
                user={user} />
            <main>
                <ul>
                    {!error && <div className={classes.loansHeader}>
                        <div>
                            <h1>APPROVE OR REJECT LOANS</h1>
                        </div>
                        <div>
                            <input className={classes.searchHeader} type="text" placeholder="Search loan" />
                        </div>
                    </div>}
                    {loans.length > 0 && loans.map(customer => {
                        return <li key={customer._id}>
                            <div className={classes.loansOne}>
                                <p>User : {customer.username}</p>
                                <p>Amount : {customer.amount}</p>
                                <p>Duration : {customer.duration}</p>
                                <p>Date: {parseDate(customer.date)}</p>
                                {statusColor(customer)}
                            </div>
                        </li>
                    })}
                </ul>
                {loading && <div align="center">
                    <img src={LoadingImg} width="120" height="120" alt="spinner" />
                </div>}
                {error && loans.length === 0 && <div className={classes.noloans}>No loans found!</div>}
            </main>
        </React.Fragment>
    );
};


export default Listusers;