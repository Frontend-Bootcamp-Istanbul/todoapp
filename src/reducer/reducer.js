import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, SHOW_NOTIFICATON, HIDE_NOTIFICATION} from "../actions/actions";
import {combineReducers} from "redux";
import {notificationReducer} from "./notificationsReducer";
import {todosReducer} from "./todosReducer";

const rootReducer = combineReducers({todosReducer, notificationReducer});

export default rootReducer;