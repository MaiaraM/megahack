import UserStore from './UserStore';
import AuthStore from './AuthStore';
import EventStore from './EventStore'

class RootStore {
     constructor(){
        this.userStore = new UserStore(this);
        this.authStore = new AuthStore(this);
        this.eventStore = new EventStore(this);
    }
}

export default RootStore;