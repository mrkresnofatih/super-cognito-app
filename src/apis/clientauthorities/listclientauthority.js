import axios from "axios";

export const ApiClientAuthorityList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client-authority/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
