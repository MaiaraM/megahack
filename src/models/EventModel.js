/**Modelo usuário */
class EventModel {
    constructor(data = {}) {
        this.uuid = data.uuid;
        this.skuCode = data.skuCode;
        this.shortName = data.shortName;
    }
}

export default EventModel;