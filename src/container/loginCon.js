import { connect } from 'react-redux'
import Login from '../component/login'
import loginRequest from '../store/action/loginAction'

function mapStateToProps(state) {
    console.log('statwe', state)
    return {
        isLoged : state.LoginReducer.isLogin

    }
}


function mapDispatchToProps(dispatch){
    return{
loginData : (data)=>dispatch(loginRequest(data))
    }
}


 const LoginCon = connect(mapStateToProps,mapDispatchToProps)(Login)

 export default LoginCon