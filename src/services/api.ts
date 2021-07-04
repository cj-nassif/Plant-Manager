import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.7.233.71:3333',
})

export default api;