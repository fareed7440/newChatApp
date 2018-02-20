import { connect } from 'react-redux'
import Chat from '../component/chat'
import chatRequest from '../store/action/chatAction'
import{onLogoutRequest} from '../store/action/chatAction'

function mapStateToProps(state) {
    console.log('statwe', state)
    return {
       mgsData : state.ChatReducer.chatdata,
       logedout : state.ChatReducer.logedOut

    }
}


function mapDispatchToProps(dispatch){
    return{
chatData : (data)=>dispatch(chatRequest(data)),
logout : ()=>dispatch(onLogoutRequest())

    }
}


 const ChatCon = connect(mapStateToProps,mapDispatchToProps)(Chat)

 export default ChatCon