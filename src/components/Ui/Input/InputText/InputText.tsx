import React, {FC} from 'react';
import s from './InputText.module.scss'

const InputText: FC<any> = ({...props}) =>
    <div className={s.input}>
        <input type="text" className={s.input__value} {...props}/>
        <span className={s.input__prompt}>Name</span>
    </div>

export default InputText;