import React,{Component} from 'react'
import * as NB from 'native-base'
import {Constants, takeSnapshotAsync}from 'expo'
import {View,Platform,Text} from 'react-native'
import * as DB from '../firebase/database'
import Timestamp from 'react-timestamp';
var arr = [];
var currentUserid;
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
     currentUserid=DB.auth.currentUser.uid;
    console.log('current user',currentUserid)

    console.log('uid',this.props.navigation.state.params.uid)
      
       let uid = this.props.navigation.state.params.uid
    
    this.props.dispatchchatingData(uid)
}
onEnter =()=>{
 //   const {navigate} = this.props.navigation.state.params.uid;
    let obj = {
        senderId: currentUserid,
        msg : this.state.msg,
        receiverId : this.props.navigation.state.params.uid,
        receiverName: this.props.navigation.state.params.name,
        time :Date.now(),
        chatKey :  this.props.navigation.state.params.uid+ "-" + currentUserid
    }
    console.log('object', obj)
    this.props.chatingData(obj)
    this.setState({msg:''})
}

    render(){
        const chatDataa = this.props.chatData ? this.props.chatData  : []
        console.log('chatData',chatDataa)
        console.log('date', Date.now())

        return(
        <NB.Container>
            <NB.Content>
                {
                    chatDataa.map((item,index)=>{
                        console.log('timw2', item.time)
                        return(
                            // {
                      item.chatKey==item.receiverId +"-"+item.senderId ?
                            <NB.ListItem key = {index}
                            style = {{ borderRadius : 20,alignSelf : 'flex-start',backgroundColor:'#A6B8E0' ,margin:2,minWidth:'10%',maxWidth : '50%',flexDirection: 'column',alignItems :'flex-start' }}
                            >
                            
                                <NB.Text style={{fontSize : 11,alignSelf : 'flex-start', marginLeft:20 }}>{item.msg}</NB.Text>
                                
             
                                {Date.now() - item.time < 86400000 ? 
                                <Timestamp style={{fontSize : 7,marginLeft :20 }} time={item.time/1000 }component={Text} format='time'/>:
                                <Timestamp style={{fontSize : 7,marginLeft :20 }} time={item.time/1000 }component={Text} format='date'/>}
                           
  
                            </NB.ListItem>
                            :
                            <NB.ListItem key = {index}
                            style = {{ borderRadius : 20,backgroundColor:'#3B7A7F',flexDirection: 'column',minWidth:'10%',maxWidth:'50%',alignSelf:'flex-end' ,alignItems :'flex-start',margin:5}}
                            >
                                <NB.Text style={{fontSize : 11,marginLeft :20 ,alignSelf : 'flex-start'}}>{item.msg}</NB.Text>
                                    
                                    {Date.now() - item.time < 86400000 ? 
                                <Timestamp style={{fontSize : 7,marginLeft :20  }} time={item.time/1000 }component={Text} format='time'/>:
                                <Timestamp style={{fontSize : 7,marginLeft :20 }} time={item.time/1000 }component={Text} format='date'/>}



                            </NB.ListItem>
                            // }    
                        )
                    })

                }

                </NB.Content>
            <NB.Item regular >
                  
                    <NB.Input
                     //   inlineImageLeft='search_icon'
                       autoGrow = {true}
                       autoCorrect={true}
                       numberOfLines = {4}
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