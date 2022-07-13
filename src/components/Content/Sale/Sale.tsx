import React, {useState} from 'react';
import TopControl from "../TopControl/TopControl";
import Footer from "../../Footer/Footer";
import GeneralInfoContainer from "../GeneralInfo/GeneralInfoContainer";
import userApi from "../../../Api/Api";
import Login from "../../Login/Login";
import {useSelector} from "react-redux";
import s from './Sale.module.scss'

const Sale = () => {
    const isAuth = useSelector((state: any) => state.data.isAuth)
    const [loginValue, setLoginValue] = useState<boolean>(isAuth)
    const [errorValue, setErrorValue] = useState<string>(isAuth)

    const loginSend = async (login: string) => await userApi.getUser(login).then(e => {
        setLoginValue(true)
        setErrorValue('')
    }).catch(e => {
        setErrorValue(e.response.data.error)
    });

    if (!loginValue) return <Login loginSend={loginSend} error={errorValue}/>

    return <>
        <TopControl/>
        <div className={s.content}>
            <GeneralInfoContainer/>
            <Footer/>
        </div>
    </>
};

export default Sale;