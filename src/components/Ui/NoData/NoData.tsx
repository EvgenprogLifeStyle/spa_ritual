import React from 'react';
import s from '../Loader/Loader.module.scss'

const NoData = () => {
    return (
        <div className={s.loader}>
            Нет данных!
        </div>
    );
};

export default NoData;