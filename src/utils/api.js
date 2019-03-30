import axios from 'axios';
import { httpConfig } from './config';

let apiAxios = axios.create({
    baseURL: httpConfig.API_HOST,
    timeout: 10000
});

apiAxios.interceptors.request.use(config => {
    return Object.assign({}, config, { 
        headers: {} 
    });
});

apiAxios.interceptors.response.use(
    response => {
        console.log(response);

        return response.data;
    },
    error => {
        console.log(error);
        return;
    }
);

export default apiAxios;
