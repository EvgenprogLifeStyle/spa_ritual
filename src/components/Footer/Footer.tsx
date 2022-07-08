import React from 'react';
import s from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div>
                © 1992 - 2020 Честный Агент © Все права защищены.
            </div>
            <div> 8 (495) 150-21-12</div>
        </div>
    );
};

export default Footer;