import axios from "axios"

export const ApiAuthUserToken = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/auth/user-token',
        data: {
            "userPoolId": data.userPoolId,
            "code": data.code
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}
