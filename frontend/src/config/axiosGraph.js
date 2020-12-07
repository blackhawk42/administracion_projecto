import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "http://104.198.244.0:8095"
});

export default clienteAxios;
