import axios from "axios";

export const ApiResourceGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/resource/get',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
