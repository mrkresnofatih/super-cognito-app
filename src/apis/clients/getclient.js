import axios from "axios";

export const ApiClientGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client/get',
        data: {
            clientName: data.clientName
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
