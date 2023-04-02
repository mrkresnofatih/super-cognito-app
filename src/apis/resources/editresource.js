import axios from "axios";

export const ApiResourceUpdate = (data, callback) => {
    axios({
        method: 'post',
        url: "http://localhost:5068/resource/update",
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
