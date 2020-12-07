import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "http://104.198.244.0:8112"
});

export default clienteAxios;
