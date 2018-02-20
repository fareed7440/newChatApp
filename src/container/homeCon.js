import { connect } from 'react-redux'
import Home from '../component/home'
import fbLoginRequest from '../store/action/fbloginAct'

function mapStateToProps(state) {
    console.log('statwe', state)
    return {
       //chatData : state.DispatchChatReducer.dispatchChat,
      
    }
}


function mapDispatchToProps(dispatch){
    return{
fbReq : ()=>dispatch(fbLoginRequest()),
    }
}


 const HomeCon = connect(mapStateToProps,mapDispatchToProps)(Home)

 export default HomeCon