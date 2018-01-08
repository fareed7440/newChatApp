import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
//import Login from '../../component/login';

export default function chatingRequest(data) {
    return dispatch => {
        var currentUser=DB.auth.currentUser.uid;
        console.log('current user',currentUser)
        dispatch(ChatingRequest());
        return DB.database.ref('chating/' + currentUser + "/"+ "chat/").push(data,function(err){
            if(err){

            }else{
                dispatch(ChatingRequestSuccess(data))
            }
        })
          
      
            .catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(ChatingRequestFailed(error))
        })
    }
}




function ChatingRequest() {
    return {
        type: actionTypes.CHATING_REQUEST
    }
}

function ChatingRequestSuccess(data) {
    return {
        type: ActionType.CHATING_REQUEST_SUCCESS,
        data,
    }
}

function ChatingRequestFailed() {
    return {
        type: ActionType.CHATING_REQUEST_FAILED
    }
}