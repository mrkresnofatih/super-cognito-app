import axios from "axios"

export const ApiUserPoolCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}