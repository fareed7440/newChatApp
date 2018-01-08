
import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
  error: '',
  loading:false
}

 export default function ChatingReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.CHATING_REQUEST:
        return {...state , loading:true ,error : ''}

        case ActionTypes.CHATING_REQUEST_SUCCESS:
        return{...state, ...INITIAL_STATE, chat : action.payload}

        case ActionTypes.CHATING_REQUEST_FAILED: 
        return{...state,error:'Authentication Failed' , loading:false,}

        default:
        return state;
    }

}