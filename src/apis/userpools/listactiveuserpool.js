import axios from "axios";

export const ApiUserPoolListActive = (callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-pool/list-active',
        data: {}
    }).then((response) => {
        console.log(response);
        callback(response.data);
    })
}