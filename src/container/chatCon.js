import { connect } from 'react-redux'
import Chat from '../component/chat'
import chatRequest from '../store/action/chatAction'

function mapStateToProps(state) {
    console.log('statwe', state)
    return {
       mgsData : state.ChatReducer.chatdata

    }
}


function mapDispatchToProps(dispatch){
    return{
chatData : (data)=>dispatch(chatRequest(data)),

    }
}


 const ChatCon = connect(mapStateToProps,mapDispatchToProps)(Chat)

 export default ChatCon