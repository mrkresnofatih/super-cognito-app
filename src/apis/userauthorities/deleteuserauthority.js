import axios from "axios";

export const ApiUserAuthorityDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-authority/delete',
        data: {
            principalName: data.principalName,
            roleResourceId: data.roleResourceId
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
