import axios from "axios";

export const ApiPermissionDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/permission/delete',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
