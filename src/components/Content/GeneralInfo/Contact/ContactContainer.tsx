import React, {FC, useEffect} from 'react';
import Contact from "./Contact";
import {compose} from "redux";
import {connect} from "react-redux";
import {getContact} from "../../../../Redux/Contact";
import Loader from "../../../Ui/Loader/Loader";

interface PropsContact {
    idContact: number,
    getContact: (id: number) => void,
    state: any
}

const ContactContainer: FC<PropsContact> = ({idContact, getContact, state}) => {

    useEffect(() => {
        getContact(idContact)
    }, [])
    return <>
        {state.lastname !== null
            ?
            <Contact state={state}/>
            : <Loader/>}
    </>
};

let mapStateToProps = (state: any) => ({
    state: state.contact.contact,
})

export default compose(
    connect(mapStateToProps, {getContact}),
)(React.memo(ContactContainer))

