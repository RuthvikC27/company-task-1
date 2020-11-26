import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

// COMPONENTS
import useRequest from '../../../hooks/use-request';
import classes from './index.module.css';


const Register =  () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ role, setRole ] = useState('Admin');

    // useRequest
    const { doRequest, errors } = useRequest({
        path: '/api/auth/register',
        method: 'post',
        body: {
            email,
            username,
            password,
            confirmPassword,
            role
        },
        onSuccess: () => history.push("/login")
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        await doRequest();
    }

    const onsetUsername = (e) => {
        setUsername(e.target.value);
    }
    const onSetEmail = (e) => {
        setEmail(e.target.value);
    }
    const onSetPassword = (e) => {
        setPassword(e.target.value);
    }
    const onSetConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Loan App - Register</title>
            </Helmet>

            <div className={classes.register}>
                <form method="POST"
                    className={classes.registerForm}
                    autoComplete="off"
                    onSubmit={onSubmit}>
                    <div className={classes.welcome}>
                        <h1 align="center">REGISTER</h1>
                    </div>

                    <div className={classes.registerFormInputCustom}>
                        <label htmlFor="username">username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            onChange={onsetUsername}
                            value={username} />
                    </div>

                    <div className={classes.registerFormInputCustom}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={onSetEmail}
                            value={email} />
                    </div>

                    <div className={classes.registerFormInputSameLine}>
                        <div className={classes.registerFormInput}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={onSetPassword}
                                value={password} />
                        </div>
                        <div className={classes.registerFormInput}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter confirm password"
                                onChange={onSetConfirmPassword}
                                value={confirmPassword} />
                        </div>
                    </div>
                    <div className={classes.registerSelect}>
                        <label htmlFor="role">Role</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option>Admin</option>
                            <option>Agent</option>
                            <option>Customer</option>
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

                    <div className={classes.registerButton}>
                        <button>Register</button>
                        <p className={classes.registerMessage}>Already have an account. Login <Link to={"/login"}>here</Link></p>
                    </div>
                </form>
            </div>

        </React.Fragment>
    );
};


export default Register