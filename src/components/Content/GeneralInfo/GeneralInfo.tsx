import React, {FC, useState} from "react";
import s from "./GeneralInfo.module.scss";
import AddIcon from "./../../../assets/img/Add.svg";
import {getDate} from "./GeneralInfoContainer";
import ContactContainer from "./Contact/ContactContainer";
import editIcon from "../../../assets/img/Edit.svg";
import DeleteIcon from "./../../../assets/img/delete_app.svg";
import DefaultImg from "./../../../assets/img/img_default.jpg";
import saveImg from "./../../../assets/img/save.svg";

interface PropsGeneralInfo {
    companies: {
        id: number;
        name: string;
        shortName: string;
        photos: any[];
        type: any[];
        businessEntity: string;
        contactId: number;
        contract: {
            no: string,
            issue_date: string
        }

    }
    updateShort?: (id: number, value: any) => void
}

const GeneralInfo: FC<PropsGeneralInfo> = ({companies, updateShort}) => {
    const [stateShort, setStateShort] = useState<boolean>(false);
    const [stateShortValue, setStateShortValue] = useState<string>(companies.shortName);

    const [stateCompany, setStateCompany] = useState<boolean>(false);
    // const [stateShortValue, setStateShortValue] = useState<string>(companies.shortName);


    const editShort = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateShortValue(e.target.value)
    }

    const [stateNameValue, setStateNameValue] = useState<string>(companies.name);
    const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateNameValue(e.target.value)
    }

    const [stateContractNoValue, setStateContractNoValue] = useState<string>(companies.contract.no);
    const editContractNo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateContractNoValue(e.target.value)
    }

    const [stateContractIssueValue, setStateContractIssueValue] = useState<string>(companies.contract.issue_date);
    const editContractIssue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateContractIssueValue(e.target.value)
    }

    const [stateBusinessEntityValue, setStateBusinessEntityValue] = useState<string>(companies.businessEntity);
    const editBusinessEntity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateBusinessEntityValue(e.target.value)
    }

    const [stateTypeValue, setStateTypeValue] = useState<any>(companies.type);
    const editType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateTypeValue(e.target.value.split(','))
    }

    const saveShort = () => {
        if (updateShort) {
            updateShort(12, {
                shortName: stateShortValue
            })
        }
        setStateShort(false)
    }

    const saveCompany = () => {
        // console.log(stateTypeValue.join(',').trim().split(','))
        const typeCustom = stateTypeValue.join(',').trim().split(',')
        if (typeCustom[0] === "Агент") typeCustom[0] = "agent"
        if (typeCustom[1] === "Подрядчик") typeCustom[1] = "contractor"

        if (updateShort) {
            updateShort(12, {
                name: stateNameValue,
                businessEntity: stateBusinessEntityValue,
                type: typeCustom,
                contract: {
                    no: stateContractNoValue,
                    // issue_date: stateContractIssueValue,
                },
            })
        }
        setStateCompany(false)
    }

    // const addImage = (e) => {
    //     if (e.target.files.length > 0) {
    //         setLoadingImg(true)
    //         savePhoto(e.target.files[0])
    //     }
    // }


    return (
        <div className={s.general}>
            <div className={s.general__title}>
                {!stateShort ?
                    <>
                        <h2>{companies.shortName} </h2>
                        <button
                            style={{width: 20, height: 20, background: `url(${editIcon}) center no-repeat`}}
                            onClick={() => {
                                setStateShort(true);
                            }}
                        />
                    </>
                    :
                    <>
                        <div className="input">
                            <input type="text" onChange={editShort} value={stateShortValue}/>
                            <span>Name</span>
                        </div>
                        <button onClick={() => saveShort()}><img src={saveImg} alt=""/></button>
                    </>
                }
            </div>
            <div className={s.general__wrap}>
                <div className={s.general__subtitle}>
                    <div>ОБЩАЯ ИНФОРМАЦИЯ</div>
                    {!stateCompany ?
                        <button style={{width: 20, height: 20, background: `url(${editIcon}) center no-repeat`}}
                                onClick={() => {
                                    setStateCompany(true);
                                }}/>
                        : <button onClick={saveCompany}><img src={saveImg} alt=""/></button>
                    }
                </div>
                {!stateCompany ?
                    <>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Полное название:</div>
                            <div className={s.general__data}>{companies.name} </div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Договор:</div>
                            <div
                                className={s.general__data}> {companies.contract.no} от {getDate(companies.contract.issue_date)}{" "}
                            </div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Форма:</div>
                            <div className={s.general__data}>{companies.businessEntity}</div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Тип:</div>
                            <div className={s.general__data}>
                                {companies.type.join(', ')}
                            </div>

                        </div>
                    </>
                    : <>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Полное название:</div>
                            <div className="input">
                                <input type="text" onChange={editName} value={stateNameValue}/>
                                <span>Name</span>
                            </div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Договор:</div>
                            <div style={{display: "flex", gap: 10}}>
                                <div className="input">
                                    <input type="text" onChange={editContractNo} value={stateContractNoValue}/>
                                    <span>Name</span>
                                </div>
                                <div className="input">
                                    <input type="text" onChange={editContractIssue}
                                           value={getDate(stateContractIssueValue)}/>
                                    <span>Name</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Форма:</div>
                            <div className="input">
                                <input type="text" onChange={editBusinessEntity} value={stateBusinessEntityValue}/>
                                <span>Name</span>
                            </div>
                        </div>
                        <div className={s.general__row}>
                            <div className={s.general__name}>Тип:</div>
                            <div className="input">
                                <input type="text" onChange={editType} value={stateTypeValue}/>
                                <span>Name</span>
                            </div>
                        </div>
                    </>
                }
            </div>

            <ContactContainer idContact={+companies.contactId}/>

            <div className={`${s.general__wrap} ${s.app}`}>
                <div className={s.general__subtitle}>
                    <div>ПРИЛОЖЕННЫЕ ФОТО</div>
                </div>
                <div className={s.app__list}>
                    {companies.photos.map((item) => (
                        <div className={s.app__item}>
                            <button className={s.app__del}>
                                <img src={DeleteIcon} alt="Иконка удалить"/>
                            </button>
                            <div className={s.app__img}>
                                <img src={item.filepath ? item.filepath : DefaultImg} alt=""/>
                            </div>
                            <div className={s.app__name}>{item.name}</div>
                            <div className={s.app__date}>11 июня 2018</div>
                        </div>
                    ))}
                </div>
                <button className={s.app__add}>
                    <img src={AddIcon} alt="Иконка добавить"/> ДОБАВИТЬ ИЗОБРАЖЕНИЕ
                </button>
            </div>
        </div>
    );
};

export default GeneralInfo;
