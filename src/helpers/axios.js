import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;

const axiosSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    return axios({ method, url, data });

}
const axiosConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = JSON.parse(localStorage.getItem('usuario')).token || '';

    return axios({
        method, url, data, headers: {
            'Content-type': 'application/json',
            'x-token': token
        }
    });
}

export {
    axiosSinToken,
    axiosConToken
}
