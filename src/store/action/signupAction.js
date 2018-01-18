import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
//import Login from '../../component/login';

export default function signupRequest(data) {
    return dispatch => {
        dispatch(SignupRequest());
        return DB.auth.createUserWithEmailAndPassword(data.email, data.password).then(function(send){
            send.updateProfile({displayName : data.name})
            const ref = DB.database.ref('signinUsers/' + send.uid);
            ref.set({ uid: send.uid, name: data.name, email: data.email }, success => {
                dispatch(SignupRequestSuccess({
                    uid: send.uid, name: data.name, email: data.email
                }),

            )
              
               
            })


        }).catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(SignupRequestFailed(error))
        })
    }
}




function SignupRequest() {
    return {
        type: ActionType.SIGNUP_USER
    }
}

function SignupRequestSuccess(data) {
    return {
        type: ActionType.SIGNUP_SUCCESS,
        data,
    }
}

function SignupRequestFailed() {
    return {
        type: ActionType.SIGNUP_FAILED
    }
}