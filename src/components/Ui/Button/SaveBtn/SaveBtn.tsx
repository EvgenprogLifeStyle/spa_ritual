import React, {FC} from 'react';
import saveImg from "../../../../assets/img/save.svg";
import s from '../EditButton/EditButton.module.scss'


const SaveBtn:FC<any> = ({...props}) => {
    return (
        <button {...props} className={s.btn}><img src={saveImg} alt="save"/></button>
    );
};

export default SaveBtn;