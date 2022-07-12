import React, {FC} from 'react';
import s from "../GeneralInfo.module.scss";
import DeleteIcon from "../../../../assets/img/delete_app.svg";
import DefaultImg from "../../../../assets/img/img_default.jpg";

interface PropsPhotoItem{
    deleteImage:any,
    imgState:any

}


const PhotosItem:FC<PropsPhotoItem> = ({imgState,deleteImage}) => {

    return (
        <div className={s.app__item}>
            <button className={s.app__del} onClick={() => {
                if (deleteImage) deleteImage(12, imgState.name)
            }}>
                <img src={DeleteIcon} alt="Иконка удалить"/>
            </button>
            <div className={s.app__img}>
                <img src={imgState.filepath ? imgState.filepath : DefaultImg} alt=""/>
            </div>
            <div className={s.app__name}>{imgState.name}</div>
            <div className={s.app__date}>11 июня 2018</div>
        </div>
    )
}

export default PhotosItem;