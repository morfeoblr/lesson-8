import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdKPCAfjN_jbAKYeLfrKgdujTxTtalA6I",
  authDomain: "crwn-db-6cacb.firebaseapp.com",
  databaseURL: "https://crwn-db-6cacb.firebaseio.com",
  projectId: "crwn-db-6cacb",
  storageBucket: "crwn-db-6cacb.appspot.com",
  messagingSenderId: "971558514268",
  appId: "1:971558514268:web:c80669ee587899947f0099",
  measurementId: "G-9XF96VD2V0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;