import { combineReducers } from "redux";
import threads from "./threads";
import users from "./users";
import featuredThread from "./featuredThread";
import categories from "./categories";
import comments from "./comments";

export default combineReducers({
    threads,
    users,
    featuredThread,
    categories,
    comments
})