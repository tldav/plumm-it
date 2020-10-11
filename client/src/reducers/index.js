import { combineReducers } from "redux";
import threads from "./threads";
import users from "./users";

export default combineReducers({
    threads,
    users
})