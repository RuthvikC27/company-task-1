import React from 'react';
import Nav from '../common/Nav';

const Admin = ({ role }) => {

    return (
        <React.Fragment>
            <Nav role={role}/>
            {role}
        </React.Fragment>
    );
};

export default Admin;