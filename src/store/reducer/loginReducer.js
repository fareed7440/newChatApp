
import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
    user :null,
    loading : false,
    isLogin : false,
    error : '' 
}

 export default function LoginReducer ( state = INITIAL_STATE,action){
    switch(action.type){
        case ActionTypes.LOGIN_USER:
        return {...state , loading:true ,error : ''}

        case ActionTypes.LOGIN_SUCCESS:
        return{...state, ...INITIAL_STATE, user : action.payload,isLogin:true}

        case ActionTypes.LOGIN_FAILED : 
        return{...state,error:'Authentication Failed' , loading:false,isLogin: false}

        default:
        return state;
    }

}