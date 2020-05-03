import { extendObservable } from 'mobx';

import EventApi from '../services/EventAPI';

import ToastHelper, { STATUS_HELPER } from '../utils/ToastHelper';
import EventModel from '../models/EventModel';

class EventStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.toast = new ToastHelper();
        extendObservable(this, {
            event: undefined,
            loading: true,
        });
    }

    async getEvent(skuCode) {
        const result = await EventApi.getEvent(skuCode);
        if (!result.error) {
            this.event = new EventModel(result.data);
            return new EventModel(result.data);
        } 
        this.loading = false;
        return null;
    }

    reset() {
        this.event = undefined;
        return true;
    }
}

export default EventStore;