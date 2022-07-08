import React from 'react';
import s from './InfoPage.module.scss'
import {useSelector} from "react-redux";


const InfoPage = () => {


    const state = useSelector(state => state)


    // console.log(state)
    return (
        <div className={s.info}>
            <div className={s.info__top}>
                <div className={s.info__title}>ЧЕСТНЫЙ АГЕНТ</div>
                <div className={s.info__desc}>МЕНЕДЖЕР ПРОЦЕССА</div>
            </div>

            <ul className={s.info__list}>
                <li className={s.info__item}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 16.6667H19.1667V18.3333H0.833374V16.6667H2.50004V2.49999C2.50004 2.27898 2.58784 2.06701 2.74412 1.91073C2.9004 1.75445 3.11236 1.66666 3.33337 1.66666H16.6667C16.8877 1.66666 17.0997 1.75445 17.256 1.91073C17.4122 2.06701 17.5 2.27898 17.5 2.49999V16.6667ZM15.8334 16.6667V3.33332H4.16671V16.6667H15.8334ZM6.66671 9.16666H9.16671V10.8333H6.66671V9.16666ZM6.66671 5.83332H9.16671V7.49999H6.66671V5.83332ZM6.66671 12.5H9.16671V14.1667H6.66671V12.5ZM10.8334 12.5H13.3334V14.1667H10.8334V12.5ZM10.8334 9.16666H13.3334V10.8333H10.8334V9.16666ZM10.8334 5.83332H13.3334V7.49999H10.8334V5.83332Z" fill="#82B284"/>
                    </svg>
                    Организации
                </li>
            </ul>
        </div>
    );
};

export default InfoPage;