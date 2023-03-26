import axios from "axios"

export const ApiPermissionCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/permission/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}