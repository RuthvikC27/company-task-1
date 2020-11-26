import React from 'react';
import Nav from '../Nav';

const Listusers = ({ role, user }) => {
    return (
        <React.Fragment>
            <Nav role={role}
                user={user} />
        </React.Fragment>
    );
};


export default Listusers;