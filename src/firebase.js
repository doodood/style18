import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBqV0tjvCFUiAKQV9g1zC-O1U1LNJwo5T8",
  authDomain: "street-of-style.firebaseapp.com",
  databaseURL: "https://street-of-style.firebaseio.com",
  projectId: "street-of-style",
  storageBucket: "street-of-style.appspot.com",
  messagingSenderId: "919486611256"
};
firebase.initializeApp(config);
export default firebase;