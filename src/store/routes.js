import {StackNavigator} from 'react-navigation';
import Home from '../component/home'
import SignUpCon from '../container/signupCon'
import LoginCon from '../container/loginCon'
import ChatCon from '../container/chatCon'
import ChatingCon from '../container/chatingCon'


const ApplicationRoutes = StackNavigator({
    Home  : { screen: Home},
    SignUpCon : {screen:SignUpCon},
    LoginCon : {screen: LoginCon},
    ChatCon : {screen:ChatCon},
    ChatingCon : {screen : ChatingCon}

})

export default ApplicationRoutes