import React, {FC, useEffect} from "react";
import Contact from "./Contact";
import {compose} from "redux";
import {connect} from "react-redux";
import {getContact, updateContact} from "../../../../Redux/Contact";
import Loader from "../../../Ui/Loader/Loader";

interface PropsContact {
    idContact: number;
    getContact: (id: number) => void;
    contact: any;
    sale: any;
    updateContact: (id: number, data:any) => void;
    error:string
}

const ContactContainer: FC<PropsContact> = ({idContact, getContact, contact, sale, error, updateContact}) => {

    useEffect(() => {
        getContact(idContact);
    }, [sale]);
    return <>{contact.id !== null ? <Contact state={contact} updateContact={updateContact} error={error}/> : <Loader/>}</>;
};

let mapStateToProps = (state: any) => ({
    contact: state.contact.contact,
    error: state.contact.error,
    sale: state.data.companies.id,
});

export default compose(connect(mapStateToProps, {getContact, updateContact}))(ContactContainer);
