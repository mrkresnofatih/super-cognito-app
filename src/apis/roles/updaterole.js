import axios from "axios"

export const ApiRoleUpdate = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/role/update',
        data: {
            name: data.name,
            description: data.description
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}