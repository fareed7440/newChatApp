
import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
  error: '',
  loading:false
}

 export default function ChatReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.CHAT_REQUEST:
        return {...state , loading:true ,error : ''}

        case ActionTypes.CHAT_REQUEST_SUCCESS:
        return{...state, ...INITIAL_STATE, chatdata : action.data}

        case ActionTypes.CHAT_REQUEST_FAILED: 
        return{...state,error:'Authentication Failed' , loading:false,}

        default:
        return state;
    }

}