import BaseAPI, { URLS } from "./BaseAPI";
import StorageUtil, { KEYS } from "../utils/StorageUtil";

/**AuthRequests é a camada onde incluímos a lógica que conversa direto com o backend e devolve o dado para  store.. */
class AuthAPI {

    /**Autentica o usuário e grava o token no localstorage */
    static async login(username, password) {
        try {
            const response = await BaseAPI.post(URLS.LOGIN, { username, password:password });
            if(response.status === 200){
                StorageUtil.setItem(KEYS.USER_KEY, username);
                return true;
            }
            return { error: 'Não autenticado' }
        } catch (e) {
            console.log(e.message);
            return { error: 'Não autenticado' }
        }
    }

    /**Logout - desloga o usuário no backend e remove do localstorage
     * OBS: Hoje não possuímos nenhum endpoint para invalidar o token. Portanto estamos só removendo do localStorage.
     * Se amanhã ou depois vier a possuir algo do lado do back a estrutura já está pronta e deverá ser trabalhado aqui.
     */
    static async logout() {
        StorageUtil.cleanAll();
        return true;
    }
    
    /**Faz requisição de redefinição de senha do email informado */
    static async forgetPassword(email) {
        try {
            const response = await BaseAPI.post('/forget_password', { email });
            return response.status === 200;
        } catch (e) {
            console.log(e.message);
            return { error: 'Usuário não encontrado' }
        }
    }

    /**Valida token usado para redefinir senha */
    static async validToken(token) {
        try {
            const response = await BaseAPI.get(`${'/forget_password'}/${token}`);
            return response.status === 200 ? response.data : {error: "Token inválido"};
        } catch (e) {
            console.log(e.message);
            return { error: 'Token inválido' }
        }
    }

    /**Valida token usado para redefinir senha */
    static async newPass(userUuid, newPassword) {
        try {
            const response = await BaseAPI.post(`${'/forget_password'}/${userUuid}`, { newPassword });
            return response.status === 200 ? true : {error: "Erro ao atualizar senha"};
        } catch (e) {
            console.log(e.message);
            return { error: 'Erro ao atualizar senha' }
        }
    }
}


export default AuthAPI;