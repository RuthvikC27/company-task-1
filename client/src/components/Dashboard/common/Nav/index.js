import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classes from './index.module.css';

const Nav = ({ links }) => {

    const history = useHistory();

    const leftLinks = () => {
        return links.filter(link => link.side === "left").map(link => {
            return <li key={link.id}>
                <NavLink to={link.href} activeStyle={{ color: 'tomato' }} className={classes.navButtons}  >{link.name}</NavLink>
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
            return <li key={link.id}>
                <NavLink to={link.href} activeStyle={{ color: 'tomato' }} className={classes.navButtons}  >{link.name}</NavLink>
            </li>
        })
    }

    return (
        <nav className={classes.navigation}>
            <ul className={classes.leftLinks}>
                {leftLinks()}
            </ul>
            <ul className={classes.rightLinks}>
                {rightLinks()}

                <li key={10} >
                    <button className={classes.logout} onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;