import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
//import Login from '../../component/login';

export default function dispatchChatingRequest(data) {
    console.log('check key', data)
    return dispatch => {
        var currentUser=DB.auth.currentUser.uid;
        console.log('curentuser',currentUser)
            var key =    currentUser+ '-' +data; 
            console.log("chatkey",key) 
            console.log('current user',currentUser)
            dispatch(DispatchChatingRequest());
            return DB.database.ref().child('conversations/' +currentUser+'/').orderByChild('receiverId').equalTo(data).on('value',snap=>{
                var data = snap.val();
                console.log('kk',data)
                var arr = [];
                console.log('msagfa', data)
                
                for( let key in data){
                   data[key].key = key
                    arr.push(data[key])
                    console.log("dipaaaa",arr)
                }
               dispatch(DispatchChatingRequestSuccess(arr))
             })
            //.catch((error) => {
            //     alert('some thing went wrong or email address mai contain already')
            //     dispatch(DispatchChatingRequestFailed(error))
            // })
        
    } 
        }
        
       




function DispatchChatingRequest() {
    return {
        type: actionTypes.DISPATCH_CHATING_REQUEST
    }
}

function DispatchChatingRequestSuccess(data) {
    return {
        type: ActionType.DISPATCH_CHATING_REQUEST_SUCCESS,
        data,
    }
}


function DispatchChatingRequestFailed() {
    return {
        type: ActionType.DISPATCH_CHATING_REQUEST_FAILED
    }

}