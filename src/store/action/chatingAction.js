import ActionType from './actionTypes'
import * as DB from '../../firebase/database'
import { NavigationActions } from 'react-navigation'
import actionTypes from './actionTypes';
//import Login from '../../component/login';

export default function chatingRequest(data) {
//var uid = data.uid;
    return dispatch => {
        var currentUser=DB.auth.currentUser.uid;
        var currentUserName=DB.auth.currentUser.displayName;
        console.log('current user name',currentUserName)
        dispatch(ChatingRequest());
      DB.database.ref('conversations/' + currentUser + '/').push(data,function(err){
            if(err){

            }else{
               
            //     var ref = DB.database.ref().child('conversation/' + currentUser + '/' + data.uid )
            //     console.log(data , 'aklsl;a')
            //   ref.set({"name":data.name})
              dispatch(ChatingRequestSuccess(data))
            }})
            .catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(ChatingRequestFailed(error))
        })
        DB.database.ref('conversations/' + data.receiverId + '/').push({chatKey : data.chatKey,msg  :data.msg,receiverId : currentUser,time : data.time,senderId : data.receiverId},function(err){
            if(err){

            }else{
               
            //     var ref = DB.database.ref().child('conversation/' + currentUser + '/' + data.uid )
            //     console.log(data , 'aklsl;a')
            //   ref.set({"name":data.name})
              dispatch(ChatingRequestSuccess(data))
            }})
            .catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(ChatingRequestFailed(error))
        });
      DB.database.ref('usersChating/' + currentUser + "/" + data.receiverId + '/' ).set({name: data.receiverName,uid : data.receiverId,recentMsg : data.msg, time  :Date.now() },function(err){
            if(err){

            }else{
               
            //     var ref = DB.database.ref().child('conversation/' + currentUser + '/' + data.uid )
            //     console.log(data , 'aklsl;a')
            //   ref.set({"name":data.name})
              dispatch(DispatchRecieverChatingRequestSuccess(data))
            }})
            .catch((error) => {
            alert('some thing went wrong or email address mai contain already')
            dispatch(ChatingRequestFailed(error))
        });
            DB.database.ref('usersChating/' + data.receiverId + "/" + currentUser + '/' ).set({name:currentUserName,uid :currentUser,recentMsg : data.msg, time  :Date.now() },function(err){
            if(err){

            }else{
               
            //     var ref = DB.database.ref().child('conversation/' + currentUser + '/' + data.uid )
            //     console.log(data , 'aklsl;a')
            //   ref.set({"name":data.name})
              dispatch(DispatchRecieverChatingRequestSuccess(data))
            }})
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
function DispatchRecieverChatingRequestSuccess(data) {
    return {
          type: ActionType.DISPATCH_RECIEVER_CHATING_REQUEST_SUCCESS,
         data,
     }
 }
function ChatingRequestFailed() {
    return {
        type: ActionType.CHATING_REQUEST_FAILED
    }
}