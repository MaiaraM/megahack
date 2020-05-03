import BaseAPI, { URLS } from "./BaseAPI";
import axios from 'axios';
import StorageUtil, { KEYS } from "../utils/StorageUtil";

class UserAPI {
    /**
     * Criação de um novo usuário, envio 
     * @param  {object} userData Dados do novo usuário à ser criado
     * @returns uuid ou mensagem de erro
     */
    static async createUser(userData) {
        try {
            StorageUtil.remove(KEYS.AUTH_KEY);
            const response = await BaseAPI.post(URLS.CUSTOMERS, { ...userData });
            if (response.status === 201) {
                StorageUtil.setItem(KEYS.USER_KEY, userData.user.userName);
                // exemplo de retorno:
                //* /users/e3a84c7a-8d0d-42d7-b4c1-5ba683a051e0?by=uuid
                return response.headers.location.split('/')[1].split("?")[0];
            }
            else return { error: 'Falha ao criar usuário' };
        } catch (e) {
            console.log(e.message);
            return { error: 'Falha ao cadastrar usuário' }
        }
    }

    /**
     * Busca um usuário por id
     * @param  {int} userID id do usuário a ser buscado
     */
    static async getUser(userName) {
        try {
            const url = `${URLS.CUSTOMERS}/${userName}`;
            const response = await BaseAPI.get(url);
            if(response.data.status) {
                return { error: 'Falha ao buscar usuário' };
            }
            return response.data;
        } catch(e) {
            console.log(e.message);
            return { error: 'Falha ao buscar usuário' };
        }
    }

    /**
     * Atualização de dados do usuário
     * @param  {object} data Dados do usuário
     * @param {uuid} uuid
     */
    static async update(uuid, data) {
        try {
            const url = `${URLS.CUSTOMERS}/${uuid}`;
            const response = await BaseAPI.put(url, data);
            if(response.status === 200) return response.data;
            return { error: 'Falha ao buscar usuário' };
        } catch(e) {
            console.log(e.message);
            return { error: 'Falha ao atualizar dados do usuário!' };
        }
    }

    /**Monta uma query de acordo aos dados  */
    /**
     * @param  {object} prop
     * @param  {valor} value
     */
    static async getUserBy(prop, value) {
        try {
            //Cria url /customers/valorQueQueroBuscar/
            const url = `${URLS.CUSTOMERS}/${value}/`;
            //Cria o tipo de query que o back vai interpretar
            //?by=propriedade
            const params = { by: prop };
            const response = await BaseAPI.get(url, params);
            return response.data;
        } catch (e) {
            console.log(e.message);
            return { error: 'Falha ao buscar usuário' };
        }
    }

    /**Busca CEP api pública*/
    static async getPublicAddress(code) {
        try {
            const url = `https://viacep.com.br/ws/${code}/json/`;
            const response = await axios.get(url);
            if (response.status === 200)  return response.data.erro ? { error: "CEP inválido" } : response.data;
            return { error: "CEP Inválido" }
        } catch (e) {
            console.log(e.message);
            return { error: 'Falha ao buscar CEP' };
        }
    }
}

export default UserAPI;