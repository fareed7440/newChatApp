import React,{Component} from 'react'
import * as NB from 'native-base'
import {Constants, takeSnapshotAsync}from 'expo'
import {View,Platform} from 'react-native'
import * as DB from '../firebase/database'
var arr = [];
export default class Chating extends Component{
    static navigationOptions = ({ navigation }) =>{
        return{
        title: `chat with ${navigation.state.params.name}`,
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerStyle: {
            height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
            paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        }

    }}

constructor(){
    super();
    this.state = { 
        msg  :''
    }
}
componentWillMount(){
    console.log('uid',this.props.navigation.state.params.uid)
      
       let uid = this.props.navigation.state.params.uid
    
    this.props.dispatchchatingData(uid)
}
onEnter =()=>{
 //   const {navigate} = this.props.navigation.state.params.uid;
    let obj = {
        msg : this.state.msg,
        uid : this.props.navigation.state.params.uid
    }
    console.log('object', obj)
    this.props.chatingData(obj)
    this.setState({msg:''})
}

    render(){
        const chatDataa = this.props.chatData ? this.props.chatData  : []
        console.log('chatData',chatDataa)

        return(
        <NB.Container>
            <NB.Content>
                {
                    chatDataa.map((item,index)=>{
                        return(
                            <NB.ListItem key = {index}>
                                <NB.Text>{item.msg}</NB.Text>
                            </NB.ListItem>
                        )
                    })
                }

                </NB.Content>
            <NB.Item regular >
                  
                    <NB.Input
                
                    onChangeText ={(value)=>this.setState({msg: value})}
                    placeholder={'Lets Chat'}
                    value = {this.state.msg}
                     />
                    <NB.Right>
                     <NB.Icon onPress={()=>{this.onEnter()}} style={{color: '#0097A7', marginRight : 10}} name = 'navigate'/>
                        </NB.Right>
                </NB.Item>
            </NB.Container>
        )
    }
}