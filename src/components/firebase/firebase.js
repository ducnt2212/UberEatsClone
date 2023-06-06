import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9svZrkrkgFQya36_JHDsKVHvX1q9oaPw',
  authDomain: 'uberearsclone.firebaseapp.com',
  projectId: 'uberearsclone',
  storageBucket: 'uberearsclone.appspot.com',
  messagingSenderId: '56835153917',
  appId: '1:56835153917:web:1f8bb3051005140baf4394',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
