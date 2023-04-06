import axios from "axios";

export const ApiRolePermissionCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/rolepermission/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}
