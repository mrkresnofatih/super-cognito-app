import axios from "axios"

export const ApiAuthLogin = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/auth/login',
        data: {
            "userPoolId": data.userPoolId,
            "authorizationCode": data.authorizationCode
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}