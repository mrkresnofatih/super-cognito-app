import axios from "axios";

export const ApiRolePermissionList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/rolepermission/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data);
    })
}
