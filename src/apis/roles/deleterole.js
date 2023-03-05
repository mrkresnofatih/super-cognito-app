import axios from "axios"

export const ApiRoleDelete = (data, callback) => {
    axios({
        method: 'post',
        url: 'http://localhost:5068/role/delete',
        data: {
            name: data.name
        }
    }).then((response) => {
        console.log(response);
        callback(response);
    })
}