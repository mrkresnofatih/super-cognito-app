import axios from "axios";

export const ApiUserAuthorityGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-authority/get',
        data: {
            principalName: data.principalName,
            roleResourceId: data.roleResourceId,
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
