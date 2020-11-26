import React from 'react';

import Admin from './Admin';
import Agent from './Agent';
import Customer from './Customer';

const Home = ({ user, role }) => {

    if(role === 'Admin'){
        return <Admin user={user}/>
    }
    if(role === 'Agent'){
        return <Agent user={user}/>
    }
    if(role === 'Customer'){
        return <Customer user={user}/>
    }
    return <React.Fragment>
            Dashboard
        </React.Fragment>
};

export default Home;