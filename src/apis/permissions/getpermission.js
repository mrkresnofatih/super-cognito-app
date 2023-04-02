import axios from "axios";

export const ApiPermissionGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/permission/get',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
