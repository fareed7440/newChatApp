import React, { Component } from 'react'
import * as NB from 'native-base'
import { Button } from 'native-base';
import { Font,Constants } from 'expo';
import { NavigationActions } from 'react-navigation'
import firebase from 'firebase'
import { TouchableOpacity,Dimensions,Image,Platform } from 'react-native'
export default class Home extends Component {
  static navigationOptions = {
    title: 'Chat App',
    headerTintColor: '#0097A7',
    headerBackgroundColor:'#C0CF02',
    headerTitleStyle: {
      alignSelf: 'center'
    },
     headerStyle: {
            height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
            paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        } }
  constructor(props){
    super(props);
    this.state={
   
    }  
  }
  
  
        componentDidMount(){
          const {navigate} = this.props.navigation;
          firebase.auth().onAuthStateChanged(function(user) {
              console.log('userr',user)
              if (user) {
                navigate('ChatCon',{email:user.email,uid: user.uid})
               // user.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Chat' })] }))
              } else {
                console.log("false")
                navigate('LoginCon')
                // No user is signed in.
              }
            });
          }
  render() {
       const {navigate} = this.props.navigation;
       console.log(navigate)
    return (
      <NB.Container style={{backgroundColor:'#0097A7'}}>
        <NB.Content>
         <Image style={{alignSelf:'center',height:80,width:80,marginTop:120}} source={require('../assets/sms.png')} />
        </NB.Content>

        <TouchableOpacity  onPress={()=> navigate('LoginCon')}  style={{ backgroundColor: '#DC354F', height: 40, width:200, alignItems: 'center', justifyContent: 'center',alignSelf:'center',marginBottom : 30, }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>LOG IN</NB.Text></TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigate('SignUpCon')}  style={{ backgroundColor: '#50B2FB', height: 40,width:200, alignItems: 'center', justifyContent: 'center',marginBottom : 150,alignSelf:'center' }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>SIGN UP</NB.Text></TouchableOpacity>

      </NB.Container>
    )
  }
}