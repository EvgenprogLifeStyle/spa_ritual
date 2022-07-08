import React from 'react';
import InfoPage from "./InfoPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCompanies} from "../../../Redux/Market";

const InfoPageContainer = () => {

    return (
        <InfoPage/>
    );
};


let mapStateToProps = (state: any) => ({
    state: state.data.companies,
})

export default compose(
    connect(mapStateToProps, {getCompanies}),
)(React.memo(InfoPageContainer))


