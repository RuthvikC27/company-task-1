import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// COMPONENTS
import classes from './index.module.css';
import useRequest from '../../../hooks/use-request';

export default () => {
    const history = useHistory();

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    // useRequest
    const { doRequest, errors } = useRequest({
        path: '/api/auth/login',
        method: 'post',
        body: {
            username,
            password
        },
        onSuccess: () => history.push("/user/home")
    });

    const setInputusername = (e) => {
        setusername(e.target.value);
    }

    const setInputPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = await doRequest();
        console.log(data);
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Loan App - Login</title>
            </Helmet>
            <div className={classes.loginBreak}>
                <div className={classes.login}>
                    <form method="POST"
                        autoComplete="off"
                        onSubmit={onSubmit}
                        className={classes.loginForm}
                    >
                        <div className={classes.welcome}>
                            <h1 align="center">WELCOME</h1>
                        </div>
                        <div className={classes.loginFormInput}>
                            <label htmlFor="username">username</label>
                            <input id="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={setInputusername}
                                placeholder="Enter username" />
                        </div>
                        <div className={classes.loginFormInput}>
                            <label htmlFor="password">Password</label>
                            <input id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={setInputPassword}
                                placeholder="Enter password" />
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
                        <div className={classes.loginButton}>
                            <div className={classes.forgotPassword}>
                                <Link to="/forgotpassword">forgot password?</Link>
                            </div>
                            <button >Sign In</button>
                            <p className={classes.loginMessage}>Don't have an account. Register <Link to={"/register"}>here.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};
