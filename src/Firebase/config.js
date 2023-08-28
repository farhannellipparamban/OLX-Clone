import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCm8OFf7GpG-Mebu2PSWCtMBi6txa99SQY",
  authDomain: "olx-clone-af4c3.firebaseapp.com",
  projectId: "olx-clone-af4c3",
  storageBucket: "olx-clone-af4c3.appspot.com",
  messagingSenderId: "248362724797",
  appId: "1:248362724797:web:4bff8486adef9b141736d4",
  measurementId: "G-4YYWP7F3GP"
};
export default firebase.initializeApp(firebaseConfig)

