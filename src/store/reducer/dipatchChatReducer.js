
import ActionTypes from '../action/actionTypes'
import actionTypes from '../action/actionTypes';

const INITIAL_STATE = {
   
    loading : false,
    error : '' ,
    recieveAt : '',
    reciever: false
}

 export default function DispatchChatReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.DISPATCH_CHATING_REQUEST:
        return {...state , loading:true ,error : ''}

        case ActionTypes.DISPATCH_CHATING_REQUEST_SUCCESS:
        return{...state, ...INITIAL_STATE, dispatchChat : action.data, recieveAt : Date.now()}

       

        case ActionTypes.DISPATCH_CHATING_REQUEST_FAILED: 
        return{...state,error:'Authentication Failed' , loading:false,isLogin: false}

        default:
        return state;
    }

}