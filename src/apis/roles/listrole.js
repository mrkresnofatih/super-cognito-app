import axios from "axios"

export const ApiRoleList = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/role/list',
        data: {
            ...data
        }
    }).then((response) => {
        console.log(response);
        callback(response.data);
    })
}