import axios from "axios";

export const ApiClientRotate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/client/rotate',
        data: {
            clientName: data.clientName
        }
    }).then((response) => {
        console.log(response)
        callback(response)
    })
}
