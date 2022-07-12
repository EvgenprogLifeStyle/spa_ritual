import React, {FC, useState} from "react";
import s from "./GeneralInfo.module.scss";
import ContactContainer from "./Contact/ContactContainer";
import EditButton from "../../Ui/Button/EditButton/EditButton";
import SaveBtn from "../../Ui/Button/SaveBtn/SaveBtn";
import InputText from "../../Ui/Input/InputText/InputText";
import InputFile from "../../Ui/Input/InputFile/InputFile";
import PhotosItem from "./PhotosItem/PhotosItem";
import {PropsGeneralInfo} from "../../../Type/Type";
import Company from "./Company/Company";


const GeneralInfo: FC<PropsGeneralInfo> = ({companies, updateShort, savePhoto, deleteImage}) => {
    const [stateShort, setStateShort] = useState<boolean>(false);
    const [stateShortValue, setStateShortValue] = useState<string>(companies.shortName);

    const [stateCompany, setStateCompany] = useState<boolean>(false);


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
            updateShort(companies.id, {
                shortName: stateShortValue
            })
        }
        setStateShort(false)
    }

    const saveCompany = () => {
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

    const addImage = (e: any) => {
        if (e.target.files.length > 0)
            if (savePhoto)
                savePhoto(companies.id, e.target.files[0])
    }

    return (
        <div className={s.general}>
            <div className={s.general__title}>
                {!stateShort
                    ? <>
                        <h2>{companies.shortName} </h2>
                        <EditButton onClick={() => setStateShort(true)}/>
                    </>
                    : <>
                        <InputText onChange={editShort} value={stateShortValue}/>
                        <SaveBtn onClick={saveShort}/>
                    </>
                }
            </div>

            <Company/>
            <ContactContainer idContact={+companies.contactId}/>

            <div className={`${s.general__wrap} ${s.app}`}>
                <div className={s.general__subtitle}>
                    <div>ПРИЛОЖЕННЫЕ ФОТО</div>
                </div>
                <div className={s.app__list}>
                    {companies.photos.map((item, idx) => (
                        <PhotosItem key={idx} deleteImage={deleteImage} imgState={item}/>
                    ))}
                </div>
                <InputFile onChange={addImage}/>
            </div>
        </div>
    );
};

export default GeneralInfo;
