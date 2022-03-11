import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY',
  authDomain: 'disneyplus-clone-a33d5.firebaseapp.com',
  projectId: 'disneyplus-clone-a33d5',
  storageBucket: 'disneyplus-clone-a33d5.appspot.com',
  messagingSenderId: '37918794208',
  appId: '1:37918794208:web:dbe9842dfe1dda522a4b85',
  measurementId: 'G-DRVLJKWRWG',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.firestore();

export { auth, provider, storage };
export default db;

// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
