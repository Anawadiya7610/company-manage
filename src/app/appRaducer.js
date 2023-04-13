import { combineReducers } from "redux";
import { userRaducer  as userlist} from "../api/user/userRaducer";



export const Appraducer  = combineReducers({
    userlist,
})