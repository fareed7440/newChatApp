import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
//import Login from '../../component/login';

export default function loginRequest(data) {
    return dispatch => {
        dispatch(LoginRequest());
        return DB.auth.signInWithEmailAndPassword(data.email,data.password).then((sent)=>{
            var user = {
                uid : sent.uid,
                name : data.name
            }
            dispatch(LoginRequestSuccess(data))
        })
            .catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(LoginRequestFailed(error))
        })
    }
}




function LoginRequest() {
    return {
        type: actionTypes.LOGIN_USER
    }
}

function LoginRequestSuccess(data) {
    return {
        type: ActionType.LOGIN_SUCCESS,
        data,
    }
}

function LoginRequestFailed() {
    return {
        type: ActionType.LOGIN_FAILED
    }
}