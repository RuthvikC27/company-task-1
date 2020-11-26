import React from 'react';
import Nav from '../common/Nav';

const Customer = () => {

    const links = [
        {
            id: 1,
            href: "/dashboard",
            name: "Home",
            side: "left"
        },
        {
            id: 2,
            href: "/loan-requests",
            name: "Loan requests",
            side: "left"
        }
    ]

    return (
        <React.Fragment>
            <Nav links={links}/>
            Customer
        </React.Fragment>
    );
};

export default Customer;