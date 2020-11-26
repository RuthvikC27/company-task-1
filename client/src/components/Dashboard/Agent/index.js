import React from 'react';
import Nav from '../common/Nav';

const Agent = ({ role, user }) => {


    return (
        <React.Fragment>
            <Nav role={role}
                user={user} />
            Agent
        </React.Fragment>
    );
};

export default Agent;