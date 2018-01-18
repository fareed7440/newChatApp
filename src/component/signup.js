import React, { Component } from 'react'
import * as NB from 'native-base'
import { Constants } from 'expo';
import { NavigationActions } from 'react-navigation'
import firebase from 'firebase'
import { Platform, StyleSheet, TouchableOpacity,Image,ToastAndroid } from 'react-native'
export default class SignUp extends Component {
    static navigationOptions = {
        title: 'Signup',
        headerTintColor: '#0097A7',
        headerBackgroundColor: '#C0CF02',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerStyle: {
            height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
            paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        }
    }
    constructor(props) {
        super(props);
        this.state={
            name : '',
            email:'',
            password:''
        }
    }

   
    onEnter=()=>{
    if(!this.state.email || !this.state.password || !this.state.name){
        ToastAndroid.show('please insert filed', ToastAndroid.SHORT)
    }
     else{
          if(!this.validateEmail(this.state.email)){
        ToastAndroid.show('please Enter a valid email', ToastAndroid.LONG)
    }
    else{
    let obj= { 
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
    }

    console.log('object', obj)
    if(obj.password.length<6){
        alert('password should have atleast 6 characters')
    }else{
    this.props.signIn(obj)
    this.setState({email:'', password:'',name : ''})
}}}
}
validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

componentWillReceiveProps(newProps) {
    const {navigate} = this.props.navigation;
    console.log('55', this.props)
    setTimeout(() => {
        console.log('newprpss', newProps)
        if (newProps.xyz==true) {
            navigate('LoginCon')
           // newProps.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'LoginCon' })] }))
        }
    }, 3)
}

     render() {
        // console.log('klasjdklasjkl', this.props)
        return (
            <NB.Container style={Styles.container}>
                <Image style={{alignSelf:'center',height:140,width:140,marginTop:-60}} source={require('../assets/dc.png')} />

                <NB.Item floatingLabel  style={Styles.item} >
                    <NB.Label style={{color : "#F2FF71"}}>User Name</NB.Label>
                    <NB.Input
                    onChangeText={(value)=>{this.setState({name : value})}}
                     value = {this.state.name}
                     />
                </NB.Item>

                <NB.Item floatingLabel style={Styles.item} >
                    <NB.Label  style={{color : "#F2FF71"}}>User Email</NB.Label>
                    <NB.Input 
                     value = {this.state.email}
                      onChangeText={(value)=>{this.setState({email : value})}}
                    />
                </NB.Item>
                <NB.Item floatingLabel   style={Styles.item} >
                    <NB.Label  style={{color : "#F2FF71"}}>Password</NB.Label>
                    <NB.Input
                          secureTextEntry
                      onChangeText={(value)=>{this.setState({password : value})}}
                      value = {this.state.password}
                     />
                </NB.Item>
                <TouchableOpacity onPress ={this.onEnter} style={{ backgroundColor: '#F2FF71', height: 30, width: 100, alignItems: 'center', marginTop: 30, alignSelf: 'center', justifyContent: 'center', }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>Enter</NB.Text></TouchableOpacity>

            </NB.Container>


        )
    }
}


const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

       
        backgroundColor: '#0097A7',
       

    },
    content: {

        backgroundColor: 'red',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',

    },
    item:{
         justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        marginRight: 20,
      
    },
        label:{
            color : "#F2FF71"
        }
})