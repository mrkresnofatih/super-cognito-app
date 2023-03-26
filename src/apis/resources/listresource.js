import axios from "axios"

export const ApiResourceList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/resource/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}