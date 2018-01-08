import ActionTypes from '../action/actionTypes'

const INITIAL_STATE = {
    user: null,
    loading: false,
    isSignup: false,
    //  isLogin : false,
    error: ''
}

export default function SignUpReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.SIGNUP_USER:
            return { ...state, loading: true, error: '' }

        case ActionTypes.SIGNUP_SUCCESS:
            return { ...state, ...INITIAL_STATE, isSignup: true, user: action.data, }

        case ActionTypes.SIGNUP_FAILED:
            return { ...state, error: 'Authentication Failed',isSignup:false, loading: false }

        default:
            return state;
    }

}