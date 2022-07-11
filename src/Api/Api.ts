import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://135.181.35.61:2112/',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTcyNzkyNzAsImV4cCI6MTY1Nzg4NDA3MH0.WBE5MYLYQpv_2cEQ0a1L6VXSYu6QUh9PhMTQTMaPBS8"
        // "API-KEY": '49bc418b-fd7c-4c82-b5f5-ce56b5a10082'
    }
})
export const userApi = {
    getUser: () =>
        instance.get(`auth?user=USERNAME`)
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


}
export const contactApi = {
    getContact: (idContact: number) =>
        instance.get(`contacts/${idContact}`)
            .then(response => response.data),
    putContact: (id: number, value: any) => instance.patch(`contacts/${id}`, value)
        .then(response => response.data)

}

export const imageApi = {
    putImage: (id: number, photoFile: any) => {
        let formData = new FormData();
            formData.append("file", photoFile);

        return instance.post(`companies/${id}/image`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }

}


export default userApi;