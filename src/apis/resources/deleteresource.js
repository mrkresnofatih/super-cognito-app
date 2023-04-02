import axios from "axios";

export const ApiResourceDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/resource/delete',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
