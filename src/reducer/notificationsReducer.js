import {HIDE_NOTIFICATION, SHOW_NOTIFICATON} from "../actions/actions";

export const notificationReducer = function (state = {
    notificationVisibility: false,
    notificationText: ""
}, action) {
    switch (action.type) {
        case SHOW_NOTIFICATON:
            return {
                ...state,
                notificationVisibility: true,
                notificationText: action.text
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                notificationVisibility: false
            }
        default:
            return state;
    }
};
