import axios from "axios";

export const ApiClientAuthorityGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client-authority/get',
        data: {
            clientName: data.clientName,
            roleResourceId: data.roleResourceId
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
