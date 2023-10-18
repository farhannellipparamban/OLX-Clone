import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR-MMZCF4VbzM-v3CuYYZC5ehMdIAqKgc",
  authDomain: "olx-clone-1b759.firebaseapp.com",
  projectId: "olx-clone-1b759",
  storageBucket: "olx-clone-1b759.appspot.com",
  messagingSenderId: "93602456255",
  appId: "1:93602456255:web:8bea7bdb42d1edffc19c0a"
};
export default firebase.initializeApp(firebaseConfig)

