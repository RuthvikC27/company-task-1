import React from 'react';
import Nav from '../common/Nav';

const Customer = ({ role, user }) => {

    return (
        <React.Fragment>
            <Nav role={role}
                user={user} />
            Customer
        </React.Fragment>
    );
};

export default Customer;