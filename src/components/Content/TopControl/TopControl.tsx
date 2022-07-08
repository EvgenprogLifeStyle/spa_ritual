import React from 'react';
import deleteIcon from './../../../assets/img/Delete.svg'
import linkedIcon from './../../../assets/img/Linked.svg'
import rotationIcon from './../../../assets/img/Rotation.svg'
import backIcon from './../../../assets/img/back.svg'
import s from './TopControl.module.scss'

const TopControl = () => {
    return (
        <div className={s.top}>
            <div className={s.top__back}>
                <img src={backIcon} alt=""/>
                К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
            </div>
            <div className={s.top__control}>
                <button>
                    <img src={linkedIcon} alt="linkedIcon"/>
                </button>
                <button>
                    <img src={rotationIcon} alt="rotationIcon"/>
                </button>
                <button>
                    <img src={deleteIcon} alt="deleteIcon"/>
                </button>
            </div>
        </div>
    );
};

export default TopControl;