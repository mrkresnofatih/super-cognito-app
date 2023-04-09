import axios from "axios";

export const ApiRolePermissionDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/rolepermission/delete',
        data: {
            roleName: data.roleName,
            permissionName: data.permissionName
        }
    }).then((response => {
        console.log(response)
        callback(response)
    }))
}
