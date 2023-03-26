import axios from "axios"

export const ApiPermissionList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/permission/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}