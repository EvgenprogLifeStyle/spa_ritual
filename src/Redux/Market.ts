import userApi, {companiesApi} from "../Api/Api";

enum ActionConst {
    GET_LOGIN = "GET_LOGIN",
    GET_COMPANIES = "GET_COMPANIES",

}


const defaultState = {
    companies: [{
        id:null,
        contactId:null,
        name:null,
        shortName:null,
        businessEntity:null,
        contract: {
            no: null,
            issue_date:null
        }
    }],
    isFetching: true, // лоадер


    isAuth: null
};
const Market = (state = defaultState, action: any) => {
    switch (action.type) {
        case ActionConst.GET_LOGIN: {

            return {
                ...state,
                isAuth: action.data
            };

        }
        case ActionConst.GET_COMPANIES: {

            return {
                ...state,
                companies:
                 // [...state.companies, {
                    [{
                        id: action.data.id,
                        contactId: action.data.contactId,
                        name: action.data.name,
                        shortName: action.data.shortName,
                        businessEntity: action.data.businessEntity,
                        contract: {no: action.data.contract.no, issue_date: action.data.contract.issue_date}

                    }]
            };

        }


        default:
            return state;
    }
};

export const setUser = (data: number) => ({type: ActionConst.GET_LOGIN, data})
export const setCompanies = (data: number) => ({type: ActionConst.GET_COMPANIES, data})



export const getCompanies = (id: number) => async (dispatch: any) => {
    let data = await companiesApi.getCompanies(id);

    dispatch(setCompanies(data));
}


export default Market;
