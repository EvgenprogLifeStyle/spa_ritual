import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

export const WithAuthRedirect = (Component:any) => {
    const Redirect = (props:any) => {
        if (!props.isAuth) return <Navigate replace to="/login"/>
        return <Component  {...props}/>
    }
    const mapStateAuthToProps = (state:any) => ({isAuth: state.data.isAuth})

    return connect(mapStateAuthToProps, {})(Redirect)
}

