import React, {FC, useState} from 'react';
import s from "../GeneralInfo.module.scss";
import EditButton from "../../../Ui/Button/EditButton/EditButton";
import InputText from "../../../Ui/Input/InputText/InputText";
import editIcon from "../../../../assets/img/Edit.svg";
import saveImg from "../../../../assets/img/save.svg";
import SaveBtn from "../../../Ui/Button/SaveBtn/SaveBtn";

interface PropsContact {
    state: any,
    error: any,
    updateContact: (id: number, value: any) => void
}

const Contact: FC<PropsContact> = ({state, updateContact, error}) => {

    const [stateContact, setStateContact] = useState(false)


    const [stateLastnameValue, setStateLastnameValue] = useState<string>(state.lastname);
    const editLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateLastnameValue(e.target.value)
    }

    const [stateFirstnameValue, setStateFirstnameValue] = useState<string>(state.firstname);
    const editFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateFirstnameValue(e.target.value)
    }

    const [statePatronymicValue, setStatePatronymicValue] = useState<string>(state.patronymic);
    const editPatronymic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatePatronymicValue(e.target.value)
    }
    const [statePhoneValue, setStatePhoneValue] = useState<string>(state.phone);
    const editPhone = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (error) return setStatePhoneValue(state.phone)
        setStatePhoneValue(e.target.value)


    }
    const [stateEmailValue, setStateEmailValue] = useState<string>(state.email);
    const editEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateEmailValue(e.target.value)
    }


    const saveContact = () => {

        if (updateContact) {
            updateContact(state.id, {
                lastname: stateLastnameValue,
                firstname: stateFirstnameValue,
                patronymic: statePatronymicValue,
                phone: statePhoneValue,
                email: stateEmailValue,
            })
        }
        setStateContact(false)
    }

    return (
        <div className={s.general__wrap}>


            <div className={s.general__subtitle}>
                <div>КОНТАКТНЫЕ ДАННЫЕ</div>
                {!stateContact
                    ? <EditButton onClick={() => setStateContact(true)}/>
                    : <SaveBtn onClick={saveContact}/>
                }
            </div>
            {!stateContact ?
                <>
                    <div className={s.general__row}>
                        <div className={s.general__name}>ФИО:</div>
                        <div className={s.general__data}>
                            {state.lastname} {state.firstname} {state.patronymic}</div>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Телефон:</div>
                        <div className={s.general__data}>{state.phone} </div>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Эл. почта:</div>
                        <div className={s.general__data}><a href={`mailto:${state.email}`}>{state.email} </a>
                        </div>
                    </div>
                </>
                : <>
                    <div className={s.general__row}>
                        <div className={s.general__name}>ФИО:</div>
                        <div style={{gap: 10, display: 'flex'}}>
                            <InputText onChange={editLastname} value={stateLastnameValue}/>
                            <InputText onChange={editFirstname} value={stateFirstnameValue}/>
                            <InputText onChange={editPatronymic} value={statePatronymicValue}/>
                        </div>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Телефон:</div>
                        <InputText maxLength={11} onChange={editPhone} value={statePhoneValue}/>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Эл. почта:</div>
                        <InputText onChange={editEmail} value={stateEmailValue}/>
                    </div>
                </>
            }
            {error && <div className="_error">{error}</div>}
        </div>
    );
};

export default Contact;