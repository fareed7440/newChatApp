import React, { Component } from 'react'
import * as NB from 'native-base'
import { Constants } from 'expo';
import { NavigationActions } from 'react-navigation'
import { Platform, StyleSheet, TouchableOpacity,Image,ToastAndroid } from 'react-native'
export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
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
            email:'',
            password:''
        }
    }
onEnter=()=>{
    if(!this.state.email || !this.state.password){
        ToastAndroid.show('please insert filed', ToastAndroid.SHORT)
    }
    else{
    if(!this.validateEmail(this.state.email)){
        ToastAndroid.show('please Enter a valid email', ToastAndroid.LONG)
    }
    else{
    let obj= { 
        email : this.state.email,
        password : this.state.password
    }
this.props.loginData(obj)
    console.log('object', obj)
    this.setState({email:'', password:''})
}
}}
componentWillReceiveProps(newProps) {
    console.log('55', this.props)
    setTimeout(() => {
        console.log('newprpss', newProps)
        if (newProps.isLoged==true) {
            newProps.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Chat' })] }))
        }
    }, 3)
}
validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
     render() {
        return (
            <NB.Container style={Styles.container}>
                <Image style={{alignSelf:'center',height:140,width:140, marginBottom: 80}} source={require('../assets/dc.png')} />

                <NB.Item floatingLabel style={Styles.item} >
                    <NB.Label  style={{color : "#F2FF71"}}>User Email</NB.Label>
                    <NB.Input 
                
                      onChangeText={(value)=>{this.setState({email : value})}}
                        value = {this.state.email}
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
                <TouchableOpacity onPress={this.onEnter} style={{ backgroundColor: '#F2FF71', height: 30, width: 100, alignItems: 'center', marginTop: 30, alignSelf: 'center', justifyContent: 'center', }}><NB.Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>Enter</NB.Text></TouchableOpacity>

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
        marginLeft:40,
        marginRight: 40,
      
    },
        label:{
            color : "#F2FF71"
        }
})