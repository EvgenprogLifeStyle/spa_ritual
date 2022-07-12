import React, {FC} from 'react';
import s from './InputFile.module.scss'
import AddIcon from "../../../../assets/img/Add.svg";

const InputFile: FC<any> = ({...props}) => <div className={s.file}>
    <input type="file" name="" id="file" {...props} />
    <label htmlFor="file">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.90002 7.99999C1.90002 7.66862 2.16865 7.39999 2.50002 7.39999H13.5C13.8314 7.39999 14.1 7.66862 14.1 7.99999C14.1 8.33136 13.8314 8.59999 13.5 8.59999H2.50002C2.16865 8.59999 1.90002 8.33136 1.90002 7.99999Z"
                  fill="#82B284"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.00002 1.89999C8.3314 1.89999 8.60002 2.16862 8.60002 2.49999V13.5C8.60002 13.8314 8.3314 14.1 8.00002 14.1C7.66865 14.1 7.40002 13.8314 7.40002 13.5V2.49999C7.40002 2.16862 7.66865 1.89999 8.00002 1.89999Z"
                  fill="#82B284"/>
        </svg>
        ДОБАВИТЬ ИЗОБРАЖЕНИЕ
    </label>
</div>


export default InputFile;