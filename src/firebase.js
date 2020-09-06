import firebase from "firebase";

const config = {
  apiKey: "<Your own api key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  projectId: "<your-cloud-firestore-project>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-sender-id>",
  appId: "1:1096152597569:web:6deff0f873f780273ff2c0",
  measurementId: "G-27C31YBJ7G",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
