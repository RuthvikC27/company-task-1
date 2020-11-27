import React, { useState } from 'react';
import { Helmet } from "react-helmet";

// COMPONENTS
import useRequest from '../../../../hooks/use-request';
import classes from './index.module.css';
import Nav from '../../common/Nav';
// import { useHistory } from 'react-router-dom';


const CreateRequest = ({ user, role }) => {
    // const history = useHistory();

    const [customer, setCustomer] = useState('');
    const [amount, setAmount] = useState('');
    const [ duration, setDuration ] = useState(2);

    // useRequest
    const { doRequest, errors } = useRequest({
        path: '/api/loan/create-request',
        method: 'post',
        body: {
            amount,
            customer,
            duration
        },
        onSuccess: () => window.alert("Successfully submitted")
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = await doRequest();
        if(data){
            setCustomer('');
            setAmount('');
            setDuration(2);
        }
    }

    const onSetCustomer = (e) => {
        setCustomer(e.target.value);
    }
    const onSetAmount = (e) => {
        setAmount(e.target.value);
    }


    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Loan App - Create Loan Request</title>
            </Helmet>
            <Nav user={user} role={role}/>
            <div className={classes.loan}>
                <form method="POST"
                    className={classes.loanForm}
                    autoComplete="off"
                    onSubmit={onSubmit}>
                    <div className={classes.welcome}>
                        <h1 align="center">CREATE LOAN REQUEST</h1>
                    </div>

                    <div className={classes.loanFormInputCustom}>
                        <label htmlFor="customer">customer</label>
                        <input
                            id="customer"
                            type="text"
                            name="customer"
                            placeholder="Enter customer"
                            onChange={onSetCustomer}
                            value={customer} />
                    </div>

                    <div className={classes.loanFormInputCustom}>
                        <label htmlFor="amount">amount</label>
                        <input
                            id="amount"
                            type="number"
                            name="amount"
                            placeholder="Enter amount"
                            onChange={onSetAmount}
                            value={amount} />
                    </div>

                    <div className={classes.loanSelect}>
                        <label htmlFor="duration">duration (in months)</label>
                        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                            <option>2</option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </select>
                    </div>
                    {
                        errors &&
                        <div>
                            {
                                errors.map((error, index) => {
                                    return <p className={classes.errorMessage} key={index}> {error.msg} </p>
                                })
                            }
                        </div>
                    }

                    <div className={classes.loanButton}>
                        <button>Create Request</button>
                    </div>
                </form>
            </div>

        </React.Fragment>
    );
};

export default CreateRequest;