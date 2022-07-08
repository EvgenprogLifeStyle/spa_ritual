import React, {FC} from 'react';
import s from "../GeneralInfo.module.scss";
import EditButton from "../../../Ui/Button/EditButton/EditButton";
import InputText from "../../../Ui/Input/InputText/InputText";

interface PropsContact {
    state: any
}

const Contact: FC<PropsContact> = ({state}) => {

    console.log(state)
    return (
        <div className={s.general__wrap}>
            <div className={s.general__subtitle}>
                <div>КОНТАКТНЫЕ ДАННЫЕ</div>
                <EditButton/>
            </div>
            <div className={s.general__row}>
                <div className={s.general__name}>ФИО:</div>
                <div className={s.general__data}>{state.lastname} {state.firstname} {state.patronymic}</div>
                <InputText/>

            </div>
            <div className={s.general__row}>
                <div className={s.general__name}>Телефон:</div>
                <div className={s.general__data}>{state.phone} </div>
                <InputText/>
            </div>
            <div className={s.general__row}>
                <div className={s.general__name}>Эл. почта:</div>
                <div className={s.general__data}><a href="mailto:grigoriev@funeral.com">{state.email} </a>
                </div>
                <InputText/>
            </div>

        </div>
    );
};

export default Contact;