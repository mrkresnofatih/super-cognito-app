import axios from "axios";


export const ApiRoleResourceList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/roleresource/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response)
        callback(response.data)
    })
}
