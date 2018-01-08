import {combineReducers} from 'redux'
import LoginReducer  from './loginReducer'
import SignUpReducer from './signupReducer'
import ChatingReducer from './chatingReducer'
import DispatchChatReducer from './dipatchChatReducer'
const rootReducer = combineReducers({
 LoginReducer,
 SignUpReducer,
 ChatingReducer,
 DispatchChatReducer
})

export default rootReducer