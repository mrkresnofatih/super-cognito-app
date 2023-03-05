import axios from "axios"

export const ApiUserPoolUpdate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/update',
        data: {
            userPoolId: data.id,
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}