/* import * as firebase from 'firebase';

const appConfiguration = {
  apiKey: "AIzaSyC4MOWhX3RS5WQyY5xGl4_O6GP7ggBjgHs",
  authDomain: "poolplace-97d40.firebaseapp.com",
  projectId: "poolplace-97d40",
  storageBucket: "poolplace-97d40.appspot.com",
  messagingSenderId: "343552256078",
  appId: "1:343552256078:web:7bbb2a9dc9172feb163b1f"
};


if (!firebase.apps.length) {
  firebase.initializeApp(appConfiguration)
}

    const db = firebase.firestore();
    const storage = firebase.storage();
  
  export default { firebase,db,storage} */

  import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const appConfiguration = {
  apiKey: "AIzaSyC4MOWhX3RS5WQyY5xGl4_O6GP7ggBjgHs",
  authDomain: "poolplace-97d40.firebaseapp.com",
  projectId: "poolplace-97d40",
  storageBucket: "poolplace-97d40.appspot.com",
  messagingSenderId: "343552256078",
  appId: "1:343552256078:web:7bbb2a9dc9172feb163b1f"
};

export const session_type = firebase.auth.Auth.Persistence.LOCAL;

 const app = firebase.initializeApp(appConfiguration);
 const db = app.firestore();
 const storage = app.storage();

 export default { firebase,app,db,storage}