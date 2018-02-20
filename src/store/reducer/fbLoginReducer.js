
import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
    user :null,
    loading : false,
    fbLogin : false,
    error : '' 
}

 export default function fbLoginReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.FB_LOGIN:
        return {...state , loading:true ,error : ''}

        case ActionTypes.FB_LOGIN_SUCCESS:
        return{...state, ...INITIAL_STATE, fbData : action.data,fbLogin:true}

        case ActionTypes.FB_LOGIN_FAILED : 
        return{...state,error:'Authentication Failed' , loading:false,fbLogin: false}

        default:
        return state;
    }

}