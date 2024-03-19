import React from 'react';
import  s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={s.link} activeClassName={s.active}>Find Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#" className={s.link} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#" className={s.link} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#" className={s.link} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;