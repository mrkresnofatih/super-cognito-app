import axios from "axios";

export const ApiRoleResourceOptions = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/roleresource/options',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
