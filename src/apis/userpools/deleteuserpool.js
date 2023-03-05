import axios from "axios"

export const ApiUserPoolDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/delete',
        data: {
            userPoolId: data.id
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}