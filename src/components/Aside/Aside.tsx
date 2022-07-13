import React from 'react';
import s from './Aside.modules.scss'
import Nav from "./Nav/Nav";
import InfoPage from "./InfoPage/InfoPage";

const Aside = () => {
    return (
        <aside className={s.aside}>
            <Nav/>
            <InfoPage/>
        </aside>
    );
};

export default Aside;