import axios from "axios";

export const ApiPermissionUpdate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/permission/update',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
