import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
import { AuthSession } from 'expo';
//import Login from '../../component/login';
const FB_APP_ID = '266594457162128'; 
export default function fbLoginRequest(data) {
   
    return dispatch => {
       dispatch(FbLogin());

     let redirectUrl = AuthSession.getRedirectUrl();
    // let redirectUrl = 'https://chatapp-218e3.firebaseapp.com/__/auth/handler'
      console.log('url',redirectUrl)
         let result =  AuthSession.startAsync({
           authUrl:
             `https://www.facebook.com/v2.11/dialog/oauth?response_type=token` +
             `&client_id=${FB_APP_ID}` +
             `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
         });
         console.log('result', result)
        
    } 
        }
        
       




function FbLogin() {
    return {
        type: actionTypes.FB_LOGIN
    }
}

function FbLoginSuccess(data) {
    return {
        type: ActionType.FB_LOGIN_SUCCESS,
        data,
    }
}


function FbloginFailed() {
    return {
        type: ActionType.FB_LOGIN_FAILED
    }

}