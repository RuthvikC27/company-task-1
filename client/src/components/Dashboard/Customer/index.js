import React from 'react';
import Nav from '../common/Nav';

const Customer = ({ role }) => {

    return (
        <React.Fragment>
            <Nav role={role}/>
            Customer
        </React.Fragment>
    );
};

export default Customer;