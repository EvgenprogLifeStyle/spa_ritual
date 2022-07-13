import {companiesApi, imageApi, userApi} from "../Api/Api";

enum ActionConst {
    GET_LOGIN = "GET_LOGIN",
    GET_COMPANIES = "GET_COMPANIES",
    SET_COMPANIES = "SET_COMPANIES",
    SET_SHORT = "SET_SHORT",
    ADD_PHOTO = "ADD_PHOTO",
    DELETE_PHOTO = "DELETE_PHOTO",
    DELETE_COMPANY = "DELETE_COMPANY",
}

const defaultState = {
    companies:
        {
            id: null,
            contactId: null,
            name: null,
            shortName: null,
            businessEntity: null,
            contract: {
                no: null,
                issue_date: null,
            },
            photos: [],
            type: []
        },
    isFetching: true, // лоадер
    isAuth: false,
};
const Market = (state = defaultState, action: any) => {
    switch (action.type) {
        case ActionConst.GET_LOGIN: {
            return { ...state, isAuth: action.isAuth};
        }
        case ActionConst.GET_COMPANIES: {
            return {
                ...state,
                companies:
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
        case ActionConst.SET_COMPANIES: {
            return {
                ...state,
                companies:
                    {
                        ...state.companies,
                        id: action.data.id,
                        contactId: action.data.contactId,
                        name: action.data.name,
                        businessEntity: action.data.businessEntity,
                        contract: {no: action.data.contract.no, issue_date: action.data.contract.issue_date},
                        photos: action.data.photos,
                        type: action.data.type
                    },
            };
        }
        case ActionConst.SET_SHORT: {
            return {
                ...state,
                companies: {...state.companies, shortName: action.data.shortName},
            };
        }
        case ActionConst.ADD_PHOTO: {
            return {
                ...state,
                companies: {...state.companies, photos: [...state.companies.photos, action.photos]},
            };
        }
        case ActionConst.DELETE_PHOTO: {
            return {
                ...state,
                companies: { ...state.companies, photos: updateStatePhotos(state.companies.photos, action.photos) },
            }
        }

        case ActionConst.DELETE_COMPANY: {
            return {
                defaultState
            }
        }
        default:
            return state;
    }
};

export const setUserSuccess = (isAuth: boolean) => ({type: ActionConst.GET_LOGIN, isAuth});
export const setCompanies = (data: number) => ({type: ActionConst.GET_COMPANIES, data});
export const updateCompanies = (data: any) => ({type: ActionConst.SET_COMPANIES, data});
export const updateShort = (data: string) => ({type: ActionConst.SET_SHORT, data});
export const savePhotoSuccess = (photos: any) => ({type: ActionConst.ADD_PHOTO, photos});
export const deletePhotoSuccess = (photos: any) => ({type: ActionConst.DELETE_PHOTO, photos});
export const deleteCompanySuccess = () => ({type: ActionConst.DELETE_COMPANY});


export const setUser = (login: string) => async (dispatch: any) => {
    let response = await userApi.getUser(login);
    if (response.status === 200) dispatch(setUserSuccess(true))
}

const updateStatePhotos = (state: any, nameImg: string) => state.filter((el: any) => el.name !== nameImg)

export const getCompanies = (id: number) => async (dispatch: any) => {
    let data = await companiesApi.getCompanies(id);
    if (data.type[0] === "agent") data.type[0] = "Агент"
    if (data.type[1] === "contractor") data.type[1] = "Подрядчик"
    dispatch(setCompanies(data));
};

export const updateCompaniesShort = (id: number, data: any) => async (dispatch: any) => {
    let response = await companiesApi.putCompanies(id, data);
    dispatch(updateShort(response));
};

export const updateCompaniesGeneral = (id: number, data: any) => async (dispatch: any) => {
    let response = await companiesApi.putCompanies(id, data);
    dispatch(updateCompanies(response));
};

export const savePhoto = (id: number, file: any) => async (dispatch: any) => {
    let response = await imageApi.putImage(id, file);
    dispatch(savePhotoSuccess(response))
};

export const deletePhoto = (id: number, file: any) => async (dispatch: any) => {
    await imageApi.delImage(id, file);
    dispatch(deletePhotoSuccess(file))
};

export const deleteCompany = (id: number) => async (dispatch: any) => {
    await companiesApi.delCompanies(id);
    dispatch(deleteCompanySuccess())
};

export default Market;
