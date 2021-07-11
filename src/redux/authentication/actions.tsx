import {
    USER_AUTHENTICATION,
    USER_AUTHENTICATION_SUCCESS,
    USER_AUTHENTICATION_FAILED
} from '../../constants/actionTypes';

interface userAuthentication{
    username:string,
    password:string
}
export const user_auth = (userAuth:userAuthentication)=>({
    type:USER_AUTHENTICATION,
    payload:{userAuth}
})