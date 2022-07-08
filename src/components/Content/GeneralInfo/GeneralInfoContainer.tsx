import React, {FC, useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getCompanies} from "../../../Redux/Market";
import GeneralInfo from "./GeneralInfo";
import Loader from "../../Ui/Loader/Loader";

const GeneralInfoContainer: FC = (props: any) => {


    useEffect(() => {
        props.getCompanies(12)
    }, [])

    return <>
        {props.state.length > 0
            ?
            <GeneralInfo companies={props.state}/>
            : <Loader/>}

    </>

};


let mapStateToProps = (state: any) => ({
    state: state.data.companies,
})


export const options: any = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}

export const getDate = (str: any) => {
    var date = new Date(str);
    return date.toLocaleString('ru', options)
}


export default compose(
    connect(mapStateToProps, {getCompanies}),
)(React.memo(GeneralInfoContainer))


