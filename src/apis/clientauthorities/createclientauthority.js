import axios from "axios"

export const ApiClientAuthorityCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client-authority/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
