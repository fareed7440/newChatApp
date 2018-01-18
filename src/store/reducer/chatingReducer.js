
import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
  error: '',
  loading:false,
  sendAt:'',
  reciever:false
}

 export default function ChatingReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.CHATING_REQUEST:
        return {...state , loading:true ,error : ''}

        case ActionTypes.CHATING_REQUEST_SUCCESS:
        return{...state, ...INITIAL_STATE, chat : action.data, sendAt: Date.now()}

        case ActionTypes.DISPATCH_RECIEVER_CHATING_REQUEST_SUCCESS:
        return{...state , ...INITIAL_STATE , recieveChat : action.data , reciever : true}

        case ActionTypes.CHATING_REQUEST_FAILED: 
        return{...state,error:'Authentication Failed' , loading:false,}

        default:
        return state;
    }

}