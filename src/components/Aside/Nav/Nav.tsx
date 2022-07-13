import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import homeIcon from './../../../assets/img/home_nav.svg'
import saleIcon from './../../../assets/img/sale_nav.svg'
import searchIcon from './../../../assets/img/search_nav.svg'
import settingsIcon from './../../../assets/img/settings_nav.svg'
import chatIcon from './../../../assets/img/chat_nav.svg'
import exitIcon from './../../../assets/img/exit_nav.svg'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className="top">
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/"> <img src={homeIcon} alt="Sale"/></NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/sale"> <img src={saleIcon} alt="Sale"/></NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/search"> <img src={searchIcon} alt="Search"/></NavLink></li>
            </ul>
            <ul className={s.bottom}>
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/settings"> <img src={settingsIcon} alt="Settings"/></NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/chat"> <img src={chatIcon} alt="Chat"/></NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? s.active : 'none')}
                             to="/exit"> <img src={exitIcon} alt="Exit"/></NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;