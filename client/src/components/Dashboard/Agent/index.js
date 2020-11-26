import React from 'react';
import Nav from '../common/Nav';

const Agent = () => {

    const links = [
        {
            id: 1,
            href: "/dashboard",
            name: "Home",
            side: "left"
        },
        {
            id: 2,
            href: "/list-users",
            name: "List users",
            side: "left"
        },
        {
            id: 3,
            href: "/loan-requests",
            name: "Loan requests",
            side: "left"
        },
        {
            id: 4,
            href: "/create-request",
            name: "Create request",
            side: "left"
        }
    ]

    return (
        <React.Fragment>
            <Nav links={links}/>
            Agent
        </React.Fragment>
    );
};

export default Agent;