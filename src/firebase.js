import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDe8XKc21JYoG8xOhwOfOyyKuxARNz33hg",
  authDomain: "messenger-clone-fb.firebaseapp.com",
  databaseURL: "https://messenger-clone-fb.firebaseio.com",
  projectId: "messenger-clone-fb",
  storageBucket: "messenger-clone-fb.appspot.com",
  messagingSenderId: "1096152597569",
  appId: "1:1096152597569:web:6deff0f873f780273ff2c0",
  measurementId: "G-27C31YBJ7G",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
