import React from 'react';
import s from './Loader.module.scss'
import loaderIcon from './../../../assets/img/loader.svg'
const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loaderIcon} alt="Загрузка"/>
        </div>
    );
};

export default Loader;