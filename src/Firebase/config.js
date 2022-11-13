import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyA_lg1ARTJkawLyllQwB4wXohnr5e3xdds",
  authDomain: "olx-clone-e1529.firebaseapp.com",
  projectId: "olx-clone-e1529",
  storageBucket: "olx-clone-e1529.appspot.com",
  messagingSenderId: "656164717735",
  appId: "1:656164717735:web:fb439e9e14e1b8df3dc782",
  measurementId: "G-6EBKE2LMRZ"
  };

export default firebase.initializeApp(firebaseConfig)

