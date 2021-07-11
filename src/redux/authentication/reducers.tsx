import {USER_AUTHENTICATION,
    USER_AUTHENTICATION_FAILED,
    USER_AUTHENTICATION_SUCCESS
} from '../../constants/actionTypes';

const INIT_STATE = {
    loading:false,
    loggedInUserData:{},
    error:false,
    errorMessage:""
}

type AuthenticationAction = {
    type:string,
    payload:any | string
}
//did not provide type for intial state that is passed to reducer-- can create new type for state as well
const Authentication = (state=INIT_STATE, action:AuthenticationAction ) =>{

    switch(action.type){

        case USER_AUTHENTICATION:
            return {...state,loading : true, loggedInUserData:{}, error:false, errorMessage:"" }

        case USER_AUTHENTICATION_SUCCESS:
            return {...state, loading:false, loggedInUserData: action.payload, error:false, errorMessage:""}

        case USER_AUTHENTICATION_FAILED:
            return {...state, loading:false, loggedInUserData:{}, error:true, errorMessage:action.payload}
        default:
            return {...state}
    }


}

export default Authentication;