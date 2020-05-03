/**Modelo usuário */
class UserModel {
    constructor(data = {}) {
        this.username = data.username;
        this.email = data.email;
        this.uuid = data.uuid;
        this.active = data.active;
        this.deleted = data.deleted;
        this.created = data.created;
        this.password = data.password;
    }
}

export default UserModel;