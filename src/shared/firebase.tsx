// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAf1xB7sYs4gcCP0c761hRU6QnxqFyPQdA',
  authDomain: 'felipe-souza.firebaseapp.com',
  databaseURL: 'https://felipe-souza.firebaseio.com',
  projectId: 'felipe-souza',
  storageBucket: 'felipe-souza.appspot.com',
  messagingSenderId: '287046670935',
  appId: '1:287046670935:web:749366a22a4302af166112',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
