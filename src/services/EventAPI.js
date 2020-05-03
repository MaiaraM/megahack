import BaseAPI , {URLS}from "./BaseAPI";
import StorageUtil, { KEYS } from "../utils/StorageUtil";


export default class EventApi{

    static async getEvent(skuCode) {
        try {
            const response = await  BaseAPI.get(`${URLS.EVENTS}/${skuCode}`);
            if(response.status === 200){
                StorageUtil.setItem(KEYS.EVENT_KEY, skuCode);
                return response;
            }
            return { error: 'erro' }
        } catch (e) {
            console.log(e.message);
            return { error: 'erro' }
        }
    }

}