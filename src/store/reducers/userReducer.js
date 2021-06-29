import { USER_SING_IN } from "../actions/userActions";
import { userStatus } from "../initialValues/userStatus";

const intialState = {
    userStatus:userStatus
}


export default function userReducer(state=userStatus, {type, payload}){
    switch (type) {
        case USER_SING_IN:
            
            
    
        default:
            break;
    }
}