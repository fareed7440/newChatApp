import React ,{Component} from 'react'
import * as NB from 'native-base'
import {Constants}from 'expo'
import {Platform,View,Image,Modal,StyleSheet,Text,Button,TouchableOpacity,ScrollView, Alert} from'react-native'
import { NavigationActions } from 'react-navigation'
import * as DB from '../firebase/database'
import Timestamp from 'react-timestamp';
import MultiSelect from 'react-native-multiple-select';
var selectedItems;
var arr2 = [];
//const { params } = this.props.navigation.state;
export default class Chat extends Component{
  

  
  static navigationOptions = ({ navigation }) =>{
    const { params = {} } = navigation.state
    
    return{
      title : 'Messaging',
  //  title: `${navigation.state.params.email}`,
  //   header: ({state}) => {
  //     // get the "deepest" current params.
  // },
    headerStyle: {
      height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
      paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
    },
    headerRight  :<View style={{flexDirection : 'row'}} >
     <TouchableOpacity
     onPress={() => {params.handleSave()}}
     >
    <Image    style={{height:30,width:30,marginRight:20}} source={require('../assets/fv.png')} />
    </TouchableOpacity>
     <NB.Text  onPress={() => {params.onLogOut()}} style={{marginRight:10,color : 'green'}}>Logout</NB.Text>
    </View>
    
  }};
constructor(props){
  super(props);
  this.state={
    modalVisible: false,
    navBar : false,
  listStyle :{
    backgroundColor:'grey',
    marginLeft : -2
  }
  
    
  }

}
componentWillMount(){
  
  this.props.chatData()
}

componentDidMount() {
 arr2 = [];
  this.props.navigation.setParams({ handleSave: this.openModal.bind(this), onLogOut: this.onLogout.bind(this) });
 DB.database.ref('signinUsers/').on('value', snap=>{
    var data = snap.val();
    console.log('data',data);
    for(let key in data){
      data[key].key = key
      console.log('login user',  data[key] ,)
      arr2.push(data[key])
      console.log(arr2)
    }

  })

}

onLogout(){
  //this.props.navigation.setParams({ onLogOut: this.onLogout.bind(this) });
  console.log('log out')
  this.props.logout()
}

setModalVisible(visible) {
  this.setState({ modalVisible: visible });
}

openModal() {
  this.setState({modalVisible:true});
}

closeModal() {
  this.setState({modalVisible:false});
}
// componentWillMount(){
//   firebase.database.ref('signinUsers/')

// }

sad = ()=>{
  //alert('sldk')
  this.setState({
    //navBar:true,
listStyle :{
  backgroundColor:'red',
  marginLeft : -2
}
  })
  //backgroundColor :'red'
}
componentWillReceiveProps(newProps) {
  const {navigate} = this.props.navigation;
  console.log('55', this.props)
  setTimeout(() => {
      console.log('newprpss', newProps)
       if (newProps.logedout==true ) {
      //     this.login = false;
         navigate('HomeCon')
        //  newProps.navigation.dispatch(NavigationActions.reset({ actions: [NavigationActions.navigate({ routeName: 'ChatCon' })] }))
          
      }
  }, 0)
}

    render(){
      const chattt = this.props.mgsData ? this.props.mgsData : [] 
      console.log('chattt', chattt)
      const {navigate} = this.props.navigation;
      //var keyValue=item.key;
        return(
            <NB.Container>
 <NB.Content>
 <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
           
              <View style={{ height: '85%', width: '98%', opacity: 0.9 }}>
              <ScrollView>
               {arr2.map((item , index)=>{
                 console.log('items',item)
              //  delete item.email==DB.auth.currentUser.email
               // delete data[key].key;
                 return(
                 
                   <NB.ListItem key = {index} style = {{flexDirection: 'column',alignItems : 'flex-start'}}  onPress={()=>{navigate('ChatingCon',{name : item.name, uid : item.uid}),this.setState({modalVisible:false})}}>
                     <NB.Text style={{alignSelf : 'flex-start'}}>{item.name}</NB.Text>
                     <NB.Text style={{fontSize:9,alignSelf:'flex-start'}}>{item.email}</NB.Text>
                     </NB.ListItem>
                    
                 )
               })}
                </ScrollView>
               
                <Button
                    onPress={() => this.closeModal()}
                    title="Close"
                >
                </Button>
            
            </View>
          </Modal>
        </View>
{
  chattt.map((i,ind)=>{
    
    console.log('kkkkkkkkkkkkk', i)
  

    
    
    return(
     <NB.List    key = {ind} style={{width:'100%'}}>
      <NB.ListItem onLongPress={()=>this.sad()} onPress={()=>{navigate('ChatingCon',{name : i.name,uid : i.uid})}}  avatar style={this.state.listStyle}>
                   {/* <NB.Left>
                     <NB.Thumbnail square size={50} source={{ uri: i.uri =='' ? i.uri : i.uri = '' }} />
                   </NB.Left> */}
                   <NB.Body>
                     <NB.Text >{i.name}</NB.Text>
                     <NB.Text note>{i.recentMsg}</NB.Text>
                   </NB.Body>
                   <NB.Right>
                   {Date.now() - i.time < 86400000 ? 
                                <Timestamp style={{fontSize : 11,marginLeft :20 }} time={i.time/1000 }component={Text} format='time'/>:
                                <Timestamp style={{fontSize : 11,marginLeft :20 }} time={i.time/1000 }component={Text} format='date'/>}
                   </NB.Right>
                 </NB.ListItem>
                 </NB.List>
               
    )
  })
}


               </NB.Content>
             </NB.Container>
               
        )
    }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});