import firebase from "firebase";

const config = {
  apiKey: "<Your own api key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  projectId: "<your-cloud-firestore-project>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-sender-id>",
  appId: "<your-app-id>",
  measurementId: "<your id>",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
