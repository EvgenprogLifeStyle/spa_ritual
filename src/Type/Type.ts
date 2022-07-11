export const defaultState = {
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
    isAuth: null,
};