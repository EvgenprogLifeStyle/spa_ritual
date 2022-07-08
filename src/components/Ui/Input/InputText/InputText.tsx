import React, {FC} from 'react';
import s from './InputText.module.scss'
const InputText:FC = (...props) =>
    <div className={s.input}>
        <input className={s.input__value}  {...props}/>
        <span className={s.input__prompt}></span>
    </div>


export default InputText;