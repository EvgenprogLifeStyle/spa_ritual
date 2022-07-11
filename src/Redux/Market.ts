import {companiesApi} from "../Api/Api";
import {defaultState} from "../Type/Type";

enum ActionConst {
    GET_LOGIN = "GET_LOGIN",
    GET_COMPANIES = "GET_COMPANIES"
}


const Market = (state = defaultState, action: any) => {
    switch (action.type) {
        case ActionConst.GET_LOGIN: {
            return {
                ...state,
                isAuth: action.data,
            };
        }
        case ActionConst.GET_COMPANIES: {
            return {
                ...state,
                companies:
                // [...state.companies, {
                    {
                        id: action.data.id,
                        contactId: action.data.contactId,
                        name: action.data.name,
                        shortName: action.data.shortName,
                        businessEntity: action.data.businessEntity,
                        contract: {no: action.data.contract.no, issue_date: action.data.contract.issue_date},
                        photos: action.data.photos,
                        type: action.data.type
                    },
            };
        }

        default:
            return state;
    }
};

export const setUser = (data: number) => ({type: ActionConst.GET_LOGIN, data});
export const setCompanies = (data: number) => ({type: ActionConst.GET_COMPANIES, data});

export const getCompanies = (id: number) => async (dispatch: any) => {
    let data = await companiesApi.getCompanies(id);
    if (data.type[0] === "agent") data.type[0] = "Агент"
    if (data.type[1] === "contractor") data.type[1] = "Подрядчик"
    dispatch(setCompanies(data));
};


export const updateCompaniesShort = (id: number, data: string) => async (dispatch: any) => {
    let response = await companiesApi.putCompanies(id, data);
    dispatch(setCompanies(response));
};


export const updateCompaniesGeneral = (id: number, data: any) => async (dispatch: any) => {

    let response = await companiesApi.putCompanies(id, data);

    dispatch(setCompanies(response));
};

export default Market;
