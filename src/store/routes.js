import {StackNavigator} from 'react-navigation';
import Home from '../component/home'
import SignUpCon from '../container/signupCon'
import LoginCon from '../container/loginCon'
import Chat from '../component/chat'
import ChatingCon from '../container/chatingCon'


const ApplicationRoutes = StackNavigator({
    Home  : { screen: Home},
    SignUpCon : {screen:SignUpCon},
    LoginCon : {screen: LoginCon},
    Chat : {screen:Chat},
    ChatingCon : {screen : ChatingCon}

})

export default ApplicationRoutes