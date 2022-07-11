import React, { FC, useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {getCompanies, updateCompaniesShort} from "../../../Redux/Market";
import GeneralInfo from "./GeneralInfo";
import Loader from "../../Ui/Loader/Loader";

const GeneralInfoContainer: FC = (props: any) => {
    useEffect(() => {
        props.getCompanies(12);
    }, []);
    console.log(props)
    return <>{props.state.id !== null ? <GeneralInfo companies={props.state} updateShort={props.updateCompaniesShort} /> : <Loader />}</>;
};

let mapStateToProps = (state: any) => ({
    state: state.data.companies,
});

export const options: any = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
};

export const getDate = (str: any) => {
    var date = new Date(str);
    return date.toLocaleString("ru", options);
};

export default compose(connect(mapStateToProps, { getCompanies, updateCompaniesShort }))(React.memo(GeneralInfoContainer));
