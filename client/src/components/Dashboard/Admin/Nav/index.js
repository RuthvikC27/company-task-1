import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classes from './index.module.css';

const Nav = () => {

    const history = useHistory();

    const links = [
        {
            href: "/dashboard",
            name: "Home",
            side: "left"
        },
        {
            href: "/list-users",
            name: "List users",
            side: "left"
        },
        {
            href: "/loan-requests",
            name: "Loan requests",
            side: "left"
        },
        {
            href: "/logout",
            name: "Logout",
            side: "right"
        }
    ]

    const leftLinks = () => {
        return links.filter(link => link.side === "left").map(link => {
            return <li key={link.name}>
                <NavLink to={link.href} activeStyle={{ color:'tomato' }} className={classes.navButtons}  >{link.name}</NavLink>
            </li>
        })
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');

        history.push("/login");
    }

    const rightLinks = () => {
        return links.filter(link => link.side === "right").map(link => {
            return <li key={link.name} >
                <button className={classes.logout} onClick={logout}>{link.name}</button>
            </li>
        })
    }

    return (
        <nav className={classes.navigation}>
            <ul className={classes.leftLinks}>
                { leftLinks() }
            </ul>
            <ul className={classes.rightLinks}>
                { rightLinks() }
            </ul>
        </nav>
    );
};

export default Nav;