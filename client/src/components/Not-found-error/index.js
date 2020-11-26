import React from 'react';

import { useHistory } from 'react-router-dom';

import NotFoundImg from './404-not-found.png';
import classes from './index.module.css';

const NotFound = () => {
    const history = useHistory();
    return (
        <div align="center">
            <img src={NotFoundImg} 
            onClick={() => history.push("/dashboard")}
            width="650" 
            height="650" 
            className={classes.NotFound} />
        </div>
    );
};

export default NotFound;