import axios from "axios";

export const ApiClientDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client/delete',
        data: {
            clientName: data.clientName
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
