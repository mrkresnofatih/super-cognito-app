import axios from "axios"

export const ApiRoleCreate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/role/create',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}