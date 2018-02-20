import React, { Component } from 'react'
import * as NB from 'native-base'
import {  } from 'native-base';
import { Font,Constants,AuthSession,Expo } from 'expo';
//import { AuthSession } from 'expo';
import { NavigationActions } from 'react-navigation'
import firebase from 'firebase'
import { TouchableOpacity,Dimensions,Image,Platform ,StyleSheet,View,Text,Button} from 'react-native'
const FB_APP_ID = 'YOUR_APP_ID'; 
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
      result: null,
    }  
  }
  
   fbLoginReq = async () => {
     console.log('fb login')
  //  this.props.fbReq()
   };

        componentDidMount(){
          const {navigate} = this.props.navigation;
        //  setTimeout(() => {
            firebase.auth().onAuthStateChanged(function(user) {
              console.log('userr',user)
              if (!user) {
                <NB.Spinner color='green'></NB.Spinner>
               // user.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Chat' })] }))
              } else {

                       navigate('ChatCon',{email:user.email,uid: user.uid})
              //  navigate('LoginCon')
                // No user is signed in.
              }
            })
          //},0)

          }
          
  render() {
     //  const {navigate} = this.props.navigation;
    //   console.log(navigate)
    return (
      <NB.Container style={{backgroundColor:'#0097A7'}}>
        <NB.Content>
         <Image style={{alignSelf:'center',height:80,width:80,marginTop:120}} source={require('../assets/sms.png')} />
        </NB.Content>

        <TouchableOpacity  onPress={()=>  this.props.navigation.navigate('LoginCon')}  style={{ backgroundColor: '#DC354F', height: 40, width:200, alignItems: 'center',marginTop : 20, justifyContent: 'center',alignSelf:'center',marginBottom : 30, }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>LOG IN</NB.Text></TouchableOpacity>

        <TouchableOpacity  onPress={()=>  this.props.navigation.navigate('SignUpCon')}  style={{ backgroundColor: '#50B2FB', height: 40,width:200, alignItems: 'center', justifyContent: 'center',marginBottom : 30,alignSelf:'center' }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>SIGN UP</NB.Text></TouchableOpacity>

      
        <TouchableOpacity onPress={()=> this.fbLoginReq()} style={{ backgroundColor: '#285CFF', height: 40, width:200, alignItems: 'center', justifyContent: 'center',alignSelf:'center',marginBottom : 120 }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>Fb Auth</NB.Text></TouchableOpacity>
   
      </NB.Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   // alignItems: 'center',
    //justifyContent: 'center',
  },
});