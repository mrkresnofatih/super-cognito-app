import axios from "axios";

export const ApiClientList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client/list',
        data: {
            ...data
        },
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
