import {combineReducers} from 'redux'
import LoginReducer  from './loginReducer'
import SignUpReducer from './signupReducer'
import ChatingReducer from './chatingReducer'
import ChatReducer from './chatReducer'
import DispatchChatReducer from './dipatchChatReducer'
const rootReducer = combineReducers({
 LoginReducer,
 SignUpReducer,
 ChatingReducer,
 DispatchChatReducer,
 ChatReducer
})

export default rootReducer