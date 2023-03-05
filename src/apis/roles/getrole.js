import axios from "axios"

export const ApiRoleGet = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/role/get',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}