import { toast } from "react-toastify";

export default class ToastHelper {

    notify = (type = "info", message = "NotificationToaster", autoClose = 1800, position = toast.POSITION.BOTTOM_RIGHT, hideProgressBar = true) => {
        switch (type) {
            case STATUS_HELPER.SUCCESS:
                toast.success(message, {
                    position: position,
                    autoClose: autoClose,
                    hideProgressBar
                });
                break;
            case STATUS_HELPER.ERROR:
                toast.error(message, {
                    position: position,
                    autoClose: autoClose,
                    hideProgressBar
                });
                break;
            case STATUS_HELPER.WARNING:
                toast.warn(message, {
                    position: position,
                    autoClose: autoClose,
                    hideProgressBar
                });
                break;
            default:
                toast.info(message, {
                    position: position,
                    autoClose: autoClose,
                    hideProgressBar
                });
        }
    }
}

export const STATUS_HELPER = Object.freeze({
    ERROR: 'error',
    INFO:'info',
    WARNING: 'warning',
    SUCCESS: 'success'
});