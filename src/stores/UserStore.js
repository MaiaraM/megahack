import { extendObservable } from "mobx";

import UserAPI from "../services/UserAPI";
import CustomerModel from "../models/CustomerModel";
import ToastHelper, { STATUS_HELPER } from "../utils/ToastHelper";
import { onlyNumbers } from "../utils/Functions";
import StorageUtil, { KEYS } from "../utils/StorageUtil";

/**Valores iniciais */
const initValues = {
    loading: true,
    _user: undefined
};

class UserStore {
    constructor() {
        this.toastHelper = new ToastHelper();
        extendObservable(this, { ...initValues });
    }

    /** Current user. */
    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get userUuid() {
        return this._user && this._user.uuid;
    }

    /**noticação genérica */
    notify(message, status = STATUS_HELPER.INFO) {
        this.toastHelper.notify(status, message, 3000);
    }


    /**Cria um novo usuário */
    async signup(newUserData) {
        this.loading = true;
        const response = await UserAPI.createUser(newUserData);
        this.loading = true;
        if (response.error) this.toastHelper.notify(STATUS_HELPER.ERROR, response.error);
        return response;
    }

    /**Busca todas as informações de um usuário  */
    async getUser(userName) {
        this.loading = true;
        const response = await UserAPI.getUser(userName);
        if (!response.error) {
            this.user = new CustomerModel(response);
        }
        this.loading = false;
        return this.user;
    }

    /**Busca usuário salvo na base */
    async getSavedUser(){
        const savedUser = StorageUtil.getItem(KEYS.USER_KEY);
        if(savedUser) {
            await this.getUser(savedUser);
            if(!this.user) StorageUtil.cleanAll();
            return true;
        }
        return false;
    }
    
    /**Atualiza dados do usuário */
    async update(userData) {
        this.loading = true;
        userData['@class'] = "br.com.stoom.eurobrake.model.dto.EuroCustomerDTO";
        const response = await UserAPI.update(this.user.uuid, JSON.stringify(userData));
        if(!response.error) {
            this.toastHelper.notify(STATUS_HELPER.INFO, "Dados atualizados com sucesso!");
        } else this.toastHelper.notify(STATUS_HELPER.ERROR, response.error);
        this.loading = false;
    }

    /**Busca um usuário por um parametro. */
    async getUserByDoc(docValue) {
        const userResponse = await UserAPI.getUserBy('doc', docValue);
        this.user = new CustomerModel(userResponse);
    }

    async getUserByUuid(uuidValue) {
        const userResponse = await UserAPI.getUserBy('uuid', uuidValue);
        this.user = new CustomerModel(userResponse);
    }

    /**Busca CEP api */
    async getPublicAddress(zipCode) {
        this.loading = true;
        const mZip = onlyNumbers(zipCode);
        const response = await UserAPI.getPublicAddress(mZip);
        this.loading = false;
        return response;
    }
}

export default UserStore;