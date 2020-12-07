import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "https://cors-anywhere.herokuapp.com/http://104.198.244.0:8125"
});

export default clienteAxios;
