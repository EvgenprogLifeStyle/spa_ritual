import React, {FC} from 'react';
import EditButton from "../../Ui/Button/EditButton/EditButton";
import s from './GeneralInfo.module.scss'
import InputText from "../../Ui/Input/InputText/InputText";

import DeleteIcon from './../../../assets/img/delete_app.svg'
import AddIcon from './../../../assets/img/Add.svg'
import DefaultImg from './../../../assets/img/img_default.jpg'
import {getDate, options} from "./GeneralInfoContainer";
import Contact from "./Contact/Contact";
import ContactContainer from "./Contact/ContactContainer";

interface PropsGeneralInfo {
    companies: any[]

}

const GeneralInfo: FC<PropsGeneralInfo> = ({companies}) => {

    return (
        <div className={s.general}>
            <div className={s.general__title}>
                <h2>
                    {companies[0].shortName} </h2>
                <EditButton/>
            </div>

            <div className={s.general__wrap}>
                <div className={s.general__subtitle}>
                    <div>ОБЩАЯ ИНФОРМАЦИЯ</div>
                    <EditButton/>
                </div>
                <div className={s.general__row}>
                    <div className={s.general__name}>Полное название:</div>
                    <div className={s.general__data}>{companies[0].name} </div>
                    <InputText/>

                </div>
                <div className={s.general__row}>
                    <div className={s.general__name}>Договор:</div>
                    <div
                        className={s.general__data}>{companies[0].contract.no} от {getDate(companies[0].contract.issue_date)} </div>
                    <InputText/>
                </div>
                <div className={s.general__row}>
                    <div className={s.general__name}>Форма:</div>
                    <div className={s.general__data}>{companies[0].businessEntity}</div>
                    <InputText/>
                </div>
                <div className={s.general__row}>
                    <div className={s.general__name}>Тип:</div>
                    <div className={s.general__data}>Агент, Подрядчик</div>
                    <InputText/>
                </div>
            </div>

            <ContactContainer idContact={+companies[0].contactId}/>

            <div className={`${s.general__wrap} ${s.app}`}>
                <div className={s.general__subtitle}>
                    <div>ПРИЛОЖЕННЫЕ ФОТО</div>

                </div>
                <div className={s.app__list}>
                    <div className={s.app__item}>
                        <button className={s.app__del}><img src={DeleteIcon} alt="Иконка удалить"/></button>
                        <div className={s.app__img}><img src={DefaultImg} alt=""/>
                        </div>
                        <div className={s.app__name}>Надгробный камень.jpg</div>
                        <div className={s.app__date}>11 июня 2018</div>
                    </div>

                </div>
                <button className={s.app__add}><img src={AddIcon} alt="Иконка добавить"/> ДОБАВИТЬ ИЗОБРАЖЕНИЕ</button>
            </div>

        </div>
    );
};

export default GeneralInfo;