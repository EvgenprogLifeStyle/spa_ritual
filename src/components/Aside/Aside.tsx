import React from 'react';
import s from './Aside.modules.scss'
import Nav from "./Nav/Nav";
import InfoPageContainer from "./InfoPage/InfoPageContainer";

const Aside = () => {
    return (
        <aside className={s.aside}>
            <Nav/>
            <InfoPageContainer/>
        </aside>
    );
};

export default Aside;