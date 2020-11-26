import React from 'react';
import Nav from '../common/Nav';

const Admin = ({ user, role }) => {

    return (
        <React.Fragment>
            <Nav role={role}
                user={user} />
            {role}
        </React.Fragment>
    );
};

export default Admin;