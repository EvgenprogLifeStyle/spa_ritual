import React, {FC, useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {deletePhoto, getCompanies, savePhoto, updateCompaniesShort} from "../../../Redux/Market";
import GeneralInfo from "./GeneralInfo";
import Loader from "../../Ui/Loader/Loader";
import NoData from "../../Ui/NoData/NoData";

const GeneralInfoContainer: FC = (props: any) => {
    useEffect(() => {
        props.getCompanies(12);
    }, []);
    if (!props.state) return <NoData/>
    return <>{props.state.id !== null ?
        <GeneralInfo companies={props.state} updateShort={props.updateCompaniesShort} savePhoto={props.savePhoto}
                     deleteImage={props.deletePhoto}/> : <Loader/>}</>;
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
    const date = new Date(str);
    return date.toLocaleString("ru", options);
};

export default compose(connect(mapStateToProps, {
    getCompanies,
    updateCompaniesShort,
    savePhoto,
    deletePhoto
}))(React.memo(GeneralInfoContainer));
