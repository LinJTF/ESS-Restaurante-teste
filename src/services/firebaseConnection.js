import firebase from 'firebase/compat/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
