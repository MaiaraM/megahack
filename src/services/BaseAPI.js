import axios from 'axios';
import StorageUtil, { KEYS } from '../utils/StorageUtil';
import { decodeJWT } from '../utils/Functions';

class BaseAPI {
    /**Métodos get */
    static async get(endpoint, data = {}) {
        const requestConfig = { params: data };
        return await api.get(endpoint, requestConfig);
    }

    /**Métodos post */
    static async post(endpoint, data = {}) {
        return await api.post(endpoint, data);
    }

    /**Método Put */
    static async put(endpoint, data = {}) {
        return await api.put(endpoint, data);
    }

    /**Método Patch */
    static async patch(endpoint, data = {}) {
        return await api.patch(endpoint, data);
    }

    /**Método delete */
    static async delete(endpoint, data = {}) {
        return await api.delete(endpoint, { data });
    }
}

//Lista de todos os endpoints.
export const URLS = {
    LOGIN:"/login",
    CUSTOMERS: "/customers",
}

/**Retorno generico de excessões */
export const exception = (e, message) => {
    console.log(e);
    return { error: message }
}

export const baseURL = () => ("https://megahack-api-tim.herokuapp.com");
const api = axios.create({ baseURL: baseURL() });

//Cria uma instancia de api
api.interceptors.request.use(config => {
   config.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const token = StorageUtil.getItem(KEYS.TOKEN_KEY);

    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; },
    error => Promise.reject(error)
);


api.interceptors.response.use(response => {
    const token = response.headers.authorization;
    if (token) {
        const currentToken = response.headers.authorization.split(" ")[1];
        const decode = decodeJWT(currentToken);
        StorageUtil.setItem(KEYS.AUTH_KEY, decode.Authorities)
        StorageUtil.setItem(KEYS.TOKEN_KEY, currentToken);
    }
    return response;
},
    error => Promise.reject(error)
);


export default BaseAPI;