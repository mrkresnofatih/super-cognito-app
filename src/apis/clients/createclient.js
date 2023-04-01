import axios from "axios";

export const ApiClientCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
