import React ,{Component} from 'react'
import * as NB from 'native-base'
import {Constants}from 'expo'
import {Platform,View,Image,Modal,StyleSheet,Text,Button,TouchableOpacity} from'react-native'
import { NavigationActions } from 'react-navigation'
import * as DB from '../firebase/database'
var arr  = [];
//const { params } = this.props.navigation.state;
export default class Chat extends Component{
  

  
  static navigationOptions = ({ navigation }) =>{
    const { params = {} } = navigation.state
    return{
    title: `${navigation.state.params.email}`,
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
     <NB.Icon  style={{marginRight:10}} name = 'search'/>
    </View>
    
  }};
constructor(props){
  super(props);
  this.state={
    modalVisible: false,
  }

}

componentDidMount() {
  this.props.navigation.setParams({ handleSave: this.openModal.bind(this) });
 DB.database.ref('signinUsers/').on('value', snap=>{
    var data = snap.val();
    console.log('data',data);
    for(let key in data){
      data[key].key = key
      arr.push(data[key])
      console.log(arr)
    }

  })
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

    render(){
      const {navigate} = this.props.navigation;
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
               {arr.map((item , index)=>{
                 console.log('items',item)
                 return(
                  
                   <NB.ListItem key = {index} style = {{}}  onPress={()=>{navigate('ChatingCon',{name : item.name, uid : item.uid}),this.setState({modalVisible:false})}}>
                     <NB.Text>{item.name}</NB.Text>
                     </NB.ListItem>
               
                 )
               })}
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
            
            </View>
          </Modal>
        </View>

            <NB.List style={{width:'100%'}}>
 <NB.ListItem  avatar style={{marginLeft : -2}}>
              <NB.Left>
                <NB.Thumbnail square size={50} source={{ uri: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg' }} />
              </NB.Left>
              <NB.Body>
                <NB.Text>Kumar Pratik</NB.Text>
                <NB.Text note>Doing what you like will always keep you happy . .</NB.Text>
              </NB.Body>
              <NB.Right>
                <NB.Text note>3:43 pm</NB.Text>
              </NB.Right>
            </NB.ListItem>
            <NB.ListItem avatar   style={{marginLeft : -2}}>
              <NB.Left>
                <NB.Thumbnail  square size={50} source={{ uri: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg' }} />
              </NB.Left>
              <NB.Body>
                <NB.Text>agha</NB.Text>
                <NB.Text note>Doing what you like will always </NB.Text>
              </NB.Body>
              <NB.Right>
                <NB.Text note>3:43 pm</NB.Text>
              </NB.Right>
            </NB.ListItem>
            </NB.List>
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