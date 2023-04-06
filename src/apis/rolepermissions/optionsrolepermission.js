import axios from "axios";

export const ApiRolePermissionOptions = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/rolepermission/options',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
