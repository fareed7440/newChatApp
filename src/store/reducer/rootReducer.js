import {combineReducers} from 'redux'
import LoginReducer  from './loginReducer'
import SignUpReducer from './signupReducer'
import ChatingReducer from './chatingReducer'
import ChatReducer from './chatReducer'
import DispatchChatReducer from './dipatchChatReducer'
import fbLoginReducer from './fbLoginReducer'
const rootReducer = combineReducers({
 LoginReducer,
 SignUpReducer,
 ChatingReducer,
 DispatchChatReducer,
 ChatReducer,
 fbLoginReducer
})

export default rootReducer