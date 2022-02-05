import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBgfYP1Zs37s8Nx1Epudf9M-FnRqJOrRvI",
  authDomain: "invoice-app-23902.firebaseapp.com",
  projectId: "invoice-app-23902",
  storageBucket: "invoice-app-23902.appspot.com",
  messagingSenderId: "157404094281",
  appId: "1:157404094281:web:cdd60f54b403b526f08498",
  measurementId: "G-X20SVDPHRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
