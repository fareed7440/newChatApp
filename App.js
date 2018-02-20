import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApplicationRoutes from './src/store/routes'
import {Provider} from 'react-redux'
import store from './src/store/store'
import Expo from "expo"
export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  }
  render() {
    return (
      <Provider store={store}>
     <ApplicationRoutes/>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});









// {
//   "expo": {
//     "sdkVersion": "22.0.0"
//   }
// }
//{