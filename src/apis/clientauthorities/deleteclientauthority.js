import axios from "axios";

export const ApiClientAuthorityDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client-authority/delete',
        data: {
            clientName: data.clientName,
            roleResourceId: data.roleResourceId
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
