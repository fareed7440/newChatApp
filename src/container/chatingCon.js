import { connect } from 'react-redux'
import Chating from '../component/chating'
import chatingRequest from '../store/action/chatingAction'
import dispatchChatingRequest from '../store/action/dispatchChatAction'
function mapStateToProps(state) {
    console.log('statwe', state)
    return {
       chatData : state.DispatchChatReducer.dispatchChat

    }
}


function mapDispatchToProps(dispatch){
    return{
chatingData : (data)=>dispatch(chatingRequest(data)),
dispatchchatingData : (Ddata)=>dispatch(dispatchChatingRequest(Ddata))
    }
}


 const ChatingCon = connect(mapStateToProps,mapDispatchToProps)(Chating)

 export default ChatingCon