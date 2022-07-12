

export interface PropsGeneralInfo {
    companies: {
        id: number;
        name: string;
        shortName: string;
        photos: any[];
        type: any[];
        businessEntity: string;
        contactId: number;
        contract: {
            no: string,
            issue_date: string
        }

    }
    updateShort?: (id: number, value: any) => void,
    savePhoto?: (id: number, value: any) => void,
    deleteImage?: (id: number, value: any) => void
}