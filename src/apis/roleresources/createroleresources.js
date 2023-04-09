import axios from "axios";

export const ApiRoleResourceCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/roleresource/create',
        data: {
            roleName: data.roleName,
            resourceName: data.resourceName
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
