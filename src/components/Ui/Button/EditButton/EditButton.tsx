import React, {FC} from 'react';
import s from './EditButton.module.scss'
import editIcon from './../../../../assets/img/Edit.svg'

const EditButton:FC<any> = ({...props}) =><button className={s.btn} {...props}>
    <img src={editIcon} alt="edit"/>
</button>



export default EditButton;