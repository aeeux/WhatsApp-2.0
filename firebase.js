import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHnoS2IdvjfJrrXhkUZpxmFXZTD0aAzb4",
    authDomain: "whatsapp2-e7abc.firebaseapp.com",
    projectId: "whatsapp2-e7abc",
    storageBucket: "whatsapp2-e7abc.appspot.com",
    messagingSenderId: "839776205979",
    appId: "1:839776205979:web:9ac797ba9c523273d01a3e"
  };

const app = !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};