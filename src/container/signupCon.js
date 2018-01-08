import { connect } from 'react-redux'
import SignUp from '../component/signup'
import signupRequest from '../store/action/signupAction'

function mapStateToProps(state) {
    console.log('statwe', state)
    return {
        xyz : state.SignUpReducer.isSignup

    }
}


function mapDispatchToProps(dispatch){
    return{
signIn : (data)=>dispatch(signupRequest(data))
    }
}


 const SignUpCon = connect(mapStateToProps,mapDispatchToProps)(SignUp)

 export default SignUpCon