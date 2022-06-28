import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAspeHccI9LvZOV6icqyIMvMaqAhnoYq6M",
  authDomain: "e-ride-stage-8-a97fe.firebaseapp.com",
  projectId: "e-ride-stage-8-a97fe",
  storageBucket: "e-ride-stage-8-a97fe.appspot.com",
  messagingSenderId: "677660928658",
  appId: "1:677660928658:web:a99c93c0c4ea40cf54144b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
