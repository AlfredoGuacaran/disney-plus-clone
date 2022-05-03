import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'disney-plus-clone-4734d.firebaseapp.com',
  projectId: 'disney-plus-clone-4734d',
  storageBucket: 'disney-plus-clone-4734d.appspot.com',
  messagingSenderId: '248081092439',
  appId: '1:248081092439:web:cc05c564a5d6242b9db812',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.firestore();

export { auth, provider, storage };
export default db;
