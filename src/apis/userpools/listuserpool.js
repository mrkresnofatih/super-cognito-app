import axios from "axios";

export const ApiUserPoolList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response.data);
    })
}