import axios from "axios"

export const ApiUserPoolGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/get',
        data: {
            userPoolId: data.userPoolId
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}