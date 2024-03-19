import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className = {s.header}>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png'/>
    <div className={s.loginBlock}>

        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
    </div>

    </header>
}

export default Header;