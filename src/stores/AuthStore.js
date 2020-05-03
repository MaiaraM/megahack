import { extendObservable } from 'mobx';

import AuthAPI from '../services/AuthAPI';

import ToastHelper, { STATUS_HELPER } from '../utils/ToastHelper';
import StorageUtil from '../utils/StorageUtil';

/**
 * Store que trata toda lógica de autenticação do usuário.
 */
const initValues = {
    _isAuthenticated: false,
    loading: false
}
class AuthStore {

    uuidToken = '';

    constructor() {
        this.toast = new ToastHelper();
        extendObservable(this, {...initValues });
    }

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    set isAuthenticated(value) {
        this._isAuthenticated = value;
    }

    /** Faz o login */
    async login(username, password) {
        this.loading = true;
        this.isAuthenticated = false;
        console.log(username)
        const authResponse = await AuthAPI.login(username, password);
        this.isAuthenticated = !authResponse.error
        if(!this.isAuthenticated) StorageUtil.cleanAll();
        this.loading = false;
        return this.isAuthenticated;
    }

    /**Logout */
    async logout() {
        this.loading = true;
        await AuthAPI.logout();
        this._isAuthenticated = false;
        this.loading = false;
        return this._isAuthenticated;
    }

    /**Envia */
    async forgetPassword(email) {
        return await AuthAPI.forgetPassword(email);
    }

    /**Valida token de redefinição de senha, caso seja válido recebe uuid do usuário */
    async checkTokenForgetPass(token) {
        const response = await AuthAPI.validToken(token);
        this.uuidToken = '';
        if(!response.error) this.uuidToken = response;
        return response;
    }

    /**Redefine senha do usuário */
    async newPass(newPassword) {
        if(!this.uuidToken) return this.toast.notify(STATUS_HELPER.ERROR, "Credenciais inválidas para esta operação!")
        const response = await AuthAPI.newPass(this.uuidToken, newPassword);
        if(!response.error) this.toast.notify(STATUS_HELPER.INFO, "Senha atualizada com sucesso!");
        else this.toast.notify(STATUS_HELPER.ERROR, response.error);
        this.uuidToken = '';
        return response;
    }
}

export default AuthStore;