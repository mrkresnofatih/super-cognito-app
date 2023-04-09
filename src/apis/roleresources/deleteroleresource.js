import axios from "axios";

export const ApiRoleResourceDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/roleresource/delete',
        data: {
            roleName: data.roleName,
            resourceName: data.resourceName
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
