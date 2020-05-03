import UserModel from "./UserModel";
import { entityTypes } from '../utils/Selects';
import { validateEmail, validateCNPJ, validateCPF } from "../utils/Validators";

/**Modelo que guarda infos dos customers */
class CustomerModel {
    constructor(data = {}) {
        this.uuid = data.uuid;
        this.created = data.created;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.registration = data.registration;
        this.entity = data.entity || entityTypes[0].value;
        this.gender = data.gender !== undefined ? data.gender : "OUTROS";
        this.maritalStatus = data.maritalStatus !== undefined ? data.maritalStatus : "NA";
        this.birthdate = data.birthdate;
        this.document = data.document;
        this.phone = data.phone;
        this.mobile = data.mobile;
        this.customerType = data.customerType || "C";
        this.user = new UserModel(data.user);
    }

    get isValid() {
        if(this.firstName.length < 3) return false;
        if(this.lastName.length < 3) return false;
        if(this.user.password.length < 6) return false;
        if(!validateEmail(this.user.email).isValid) return false;
        if(this.isPJ) {
            if(!validateCNPJ(this.document).isValid ) return false;
            if(this.registration.length < 3) return false;
        }else{
            if(!validateCPF(this.document).isValid) return false;
        }
        return true;
    }

    setPJ() {
        this.entity = entityTypes[1].value;
    }

    setPF() {
        this.entity = entityTypes[0].value;
    }

    get isPJ() {
        return this.entity === entityTypes[1].value;
    }
    
    /**Retorna o nome completo */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get email() {
        return this.user.email;
    }
    
}

export default CustomerModel;