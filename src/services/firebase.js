import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbzJVmdg-C3b84waX5cbeLApLWQjoKYao",
    authDomain: "chat-app-9f442.firebaseapp.com",
    projectId: "chat-app-9f442",
    storageBucket: "chat-app-9f442.appspot.com",
    messagingSenderId: "853076239741",
    appId: "1:853076239741:web:e3dd4cec88bf8c24089814",
    measurementId: "G-FB6P2P54XQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;