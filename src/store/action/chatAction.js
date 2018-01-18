import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
//import Login from '../../component/login';
var currentUser;
export default function chatRequest(data) {
    console.log(data,"hjsashajksh")
    return dispatch => {
        var currentUser=DB.auth.currentUser.uid;
        console.log('current user',currentUser)
        dispatch(ChatRequest());
        return DB.database.ref().child('usersChating/'+currentUser + "/").on('value',snap=>{
            var data = snap.val();
            console.log('kk',data)
            var arr = [];
          var arr2 = [];
            console.log('msagfa', data)
            
           
          
            
            for( let key in data){
               data[key].key = key
             delete data[key].key;
             console.log('propsss',  data[key])
             arr.push( data[key])
            }
            

            // for(let i = 0; i < arr.length; i++){
            //     console.log('iiii', arr.length)
            //     console.log('iiiiiiii', arr[i])
            //     console.log('iiiiiiii', currentUser)
            //      DB.database.ref().child('signinUsers/'+arr[i]).on('value', snap=>{
            //         var dd = snap.val()
            //         console.log('dddd',dd)
            //          arr2.push(dd)
            //         // 
            //         console.log('arr2', arr2)
            //     })

            // }

            // console.log('arr22222', arr2) 
dispatch(ChatRequestSuccess(arr))
       
          
         })
      
        //     .catch((error) => {
        //     alert('some thing went wrong or email address mai contain already')
        //     dispatch(ChatRequestFailed(error))
        // })
    }
}




function ChatRequest() {
    return {
        type: actionTypes.CHAT_REQUEST
    }
}

function ChatRequestSuccess(data) {
    return {
        type: ActionType.CHAT_REQUEST_SUCCESS,
        data,
    }
}

function ChatRequestFailed() {
    return {
        type: ActionType.CHAT_REQUEST_FAILED
    }
}