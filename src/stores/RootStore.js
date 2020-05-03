import UserStore from './UserStore';
import AuthStore from './AuthStore';

class RootStore {
     constructor(){
        this.userStore = new UserStore(this);
        this.authStore = new AuthStore(this);
    }
}

export default RootStore;