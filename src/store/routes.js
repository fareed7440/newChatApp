import {StackNavigator} from 'react-navigation';
import HomeCon from '../container/homeCon'
import SignUpCon from '../container/signupCon'
import LoginCon from '../container/loginCon'
import ChatCon from '../container/chatCon'
import ChatingCon from '../container/chatingCon'


const ApplicationRoutes = StackNavigator({
    HomeCon  : { screen: HomeCon},
    SignUpCon : {screen:SignUpCon},
    LoginCon : {screen: LoginCon},
    ChatCon : {screen:ChatCon},
    ChatingCon : {screen : ChatingCon}

})

export default ApplicationRoutes