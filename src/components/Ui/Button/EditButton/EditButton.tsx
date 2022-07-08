import React, {FC} from 'react';
import s from './EditButton.module.scss'
import editIcon from './../../../../assets/img/Edit.svg'

const EditButton:FC = (...props) =><button className={s.edit}  style={{background:`url(${editIcon}) center no-repeat`}} {...props}/>

export default EditButton;