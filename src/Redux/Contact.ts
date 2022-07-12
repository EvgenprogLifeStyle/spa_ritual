import {companiesApi, contactApi} from "../Api/Api";
import {setCompanies} from "./Market";

enum ActionContact {
    GET_CONTACT = "GET_CONTACT",
    SET_ERROR = "SET_ERROR"

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
    error: '222'

};
const Contact = (state = defaultState, action: any) => {
    switch (action.type) {
        case ActionContact.GET_CONTACT: {
            return {
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
        case ActionContact.SET_ERROR: {

            return {
                ...state,
                error: action.error
            }
        }

        default:
            return state;
    }
};

export const setContact = (data: any) => ({type: ActionContact.GET_CONTACT, data})
export const setError = (error: any) => ({type: ActionContact.SET_ERROR, error})


export const getContact = (idContact: number) => async (dispatch: any) => {
    let data = await contactApi.getContact(idContact);
    dispatch(setContact(data));
}

export const updateContact = (id: number, data: any) => async (dispatch: any) => {
    try {
        let response = await contactApi.putContact(id, data);
        dispatch(setContact(response));
    } catch (e: any) {
        dispatch(setError(e.response.data.error))
    }
};


export default Contact;
