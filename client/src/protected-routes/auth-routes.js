import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jwt-decode';

const AuthRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const { data } = jwt(token.split(" ")[1]);
      const { username, role } = data;
      setUser(username);
      setRole(role);
      setStatus(true);
    } else {
      setUser(false);
      setRole(false);
      setStatus(false);
    }
  }, [])


  // console.log(status, role, user);
  if (status === undefined) {
    return <div></div>
  }
  return (
    <Route {...rest} render={
      props => (
        status && user && role ?
          <Redirect to="/login" />
          :
          <Component {...rest} {...props} />
      )
    } />
  )
}

export default AuthRoute;