

/** classe util que vai auxiliar a iteração com localstorage */
class StorageUtil {

    /** Pega o token do localstorage*/
    static getItem(key) {
        return localStorage.getItem(key);
    }

    /**Salva o token no localstorage */
    static setItem(key, currentToken) {
        localStorage.setItem(key, currentToken);
    }

    /**Limpa o token da sessão */
    static remove(key) {
        localStorage.removeItem(key);
    }

    static cleanAll() {
        Object.entries(KEYS).forEach(([key, value]) => {
            StorageUtil.remove(value);
        });
    }
}

//Declaração das chaves
export const KEYS = {
    TOKEN_KEY: 'api-token!',
    USER_KEY: 'api-username!',
    REMEMBER: 'api-remember-me!',
    AUTH_KEY: 'authority',
    EVENT_KEY: 'event-key!',
}

export default StorageUtil;

