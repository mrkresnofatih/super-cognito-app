import axios from "axios";

export const ApiUserGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user/get',
        data: {
            principalName: data.principalName
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}
