

  import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const appConfiguration = {
  apiKey: "Api  google",
  authDomain: "poolplace-97d40.firebaseapp.com",
  projectId: "poolplace-97d40",
  storageBucket: "poolplace-97d40.appspot.com",
  messagingSenderId: "fgfftr78",
  appId: "id apif"
};

export const session_type = firebase.auth.Auth.Persistence.LOCAL;

 const app = firebase.initializeApp(appConfiguration);
 const db = app.firestore();
 const storage = app.storage();

 export default { firebase,app,db,storage}