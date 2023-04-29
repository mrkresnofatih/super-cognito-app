import axios from "axios";

export const ApiUserDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user/delete',
        data: {
            principalName: data.principalName
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}
