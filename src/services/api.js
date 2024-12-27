// Serviço de Conexão com o Backend
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:3001'
});

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburger:userData');

    const token = userData && JSON.parse(userData).token

    config.headers.authorization = `Bearer ${token}`;

    return config;
})