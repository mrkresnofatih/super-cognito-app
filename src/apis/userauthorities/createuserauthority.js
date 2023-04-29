import axios from "axios";

export const ApiUserAuthorityCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/user-authority/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
