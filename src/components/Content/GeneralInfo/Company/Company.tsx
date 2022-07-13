import React, {FC, useState} from 'react';
import s from "../GeneralInfo.module.scss";
import EditButton from "../../../Ui/Button/EditButton/EditButton";
import SaveBtn from "../../../Ui/Button/SaveBtn/SaveBtn";
import {getDate} from "../GeneralInfoContainer";
import InputText from "../../../Ui/Input/InputText/InputText";
import {useDispatch, useSelector} from "react-redux";
import {updateCompaniesGeneral} from "../../../../Redux/Market";

const Company: FC = () => {
    const companies = useSelector((state: any) => state.data.companies)
    const dispatch = useDispatch()

    const [stateCompany, setStateCompany] = useState<boolean>(false);

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

    const saveCompany = () => {
        const typeCustom = stateTypeValue.join(',').trim().split(',')
        if (typeCustom[0] === "Агент") typeCustom[0] = "agent"
        if (typeCustom[1] === "Подрядчик") typeCustom[1] = "contractor"
        dispatch<any>(updateCompaniesGeneral(12, {
            name: stateNameValue,
            businessEntity: stateBusinessEntityValue,
            type: typeCustom,
            contract: {
                no: stateContractNoValue,
                // issue_date: stateContractIssueValue,
            },
        }))

        setStateCompany(false)
    }

    return (
        <div className={s.general__wrap}>
            <div className={s.general__subtitle}>
                <div>ОБЩАЯ ИНФОРМАЦИЯ</div>
                {!stateCompany
                    ? <EditButton onClick={() => setStateCompany(true)}/>
                    : <SaveBtn onClick={saveCompany}/>
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
                        <InputText onChange={editName} value={stateNameValue}/>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Договор:</div>
                        <div className={s.general__name__row}>
                            <InputText onChange={editContractNo} value={stateContractNoValue}/>
                            <InputText onChange={editContractIssue}
                                       value={getDate(stateContractIssueValue)}/>
                        </div>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Форма:</div>
                        <InputText onChange={editBusinessEntity} value={stateBusinessEntityValue}/>
                    </div>
                    <div className={s.general__row}>
                        <div className={s.general__name}>Тип:</div>
                        <InputText onChange={editType} value={stateTypeValue}/>
                    </div>
                </>
            }
        </div>
    );
};

export default Company;