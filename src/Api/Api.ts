import axios from "axios";

const instance = axios.create({
    baseURL: 'http://135.181.35.61:2112/',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTcyNzkyNzAsImV4cCI6MTY1Nzg4NDA3MH0.WBE5MYLYQpv_2cEQ0a1L6VXSYu6QUh9PhMTQTMaPBS8"
    }
})
export const userApi = {
    getUser: (name:string) =>
        instance.get(`auth?user=${name}`)
            .then(response => response),
}
export const companiesApi = {
    getCompanies: (id: number) =>
        instance.get(`companies/${id}`)
            .then(response => response.data),
    putCompanies: (id: number, value: any) => {
        return instance.patch(`companies/${id}`, value)
            .then(response => response.data)
    },
    delCompanies: (id: number) =>
        instance.delete(`companies/${id}`)
}
export const contactApi = {
    getContact: (idContact: number) =>
        instance.get(`contacts/${idContact}`)
            .then(response => response.data),
    putContact: (id: number, value: any) =>
        instance.patch(`contacts/${id}`, value)
            .then(response => response.data)
}

export const imageApi = {
    putImage: (id: number, photoFile: any) => {
        let formData = new FormData();
        formData.append("file", photoFile);
        return instance.post(`companies/${id}/image`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => response.data)
    },
    delImage: (id: number, photoName: string) => instance.delete(`companies/${id}/image/${photoName}`)
}

export default userApi;