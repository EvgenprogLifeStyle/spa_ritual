import {companiesApi, contactApi} from "../Api/Api";
import {setCompanies} from "./Market";

enum ActionContact {
    GET_CONTACT = "GET_CONTACT",

}


const defaultState = {
    contact: {
        id: null,
        lastname: null,
        firstname: null,
        patronymic: null,
        phone: null,
        email: null,

    },

};
const Contact = (state = defaultState, action: any) => {
    switch (action.type) {
        case ActionContact.GET_CONTACT: {

            return {
                ...state,
                contact: {
                    id: action.data.id,
                    lastname: action.data.lastname,
                    firstname: action.data.firstname,
                    patronymic: action.data.patronymic,
                    phone: action.data.phone,
                    email: action.data.email,

                }
            };

        }


        default:
            return state;
    }
};

export const setContact = (data: number) => ({type: ActionContact.GET_CONTACT, data})

export const getContact = (idContact: number) => async (dispatch: any) => {
    let data = await contactApi.getContact(idContact);
    dispatch(setContact(data));
}

export default Contact;
