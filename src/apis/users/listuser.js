import axios from "axios";

export const ApiUserList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response.data);
    })
}