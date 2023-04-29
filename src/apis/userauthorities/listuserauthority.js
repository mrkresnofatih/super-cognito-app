import axios from "axios";

export const ApiUserAuthorityList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-authority/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
