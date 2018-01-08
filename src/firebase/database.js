import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBoCQBwW9Fkmm54tvZhsLQE8Br4-EbOunk",
    authDomain: "chatapp-218e3.firebaseapp.com",
    databaseURL: "https://chatapp-218e3.firebaseio.com",
    projectId: "chatapp-218e3",
    storageBucket: "chatapp-218e3.appspot.com",
    messagingSenderId: "511762917707"
  };
  firebase.initializeApp(config);
   export const auth = firebase.auth();
   export const database = firebase.database();