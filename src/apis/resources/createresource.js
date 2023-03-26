import axios from "axios"

export const ApiResourceCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/resource/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}