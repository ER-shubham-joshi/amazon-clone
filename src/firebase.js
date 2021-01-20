import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB12WF1StqWTfX54Ygcxg19uGY4PUjaarU",
  authDomain: "clone-c1c34.firebaseapp.com",
  projectId: "clone-c1c34",
  storageBucket: "clone-c1c34.appspot.com",
  messagingSenderId: "1029949131212",
  appId: "1:1029949131212:web:8677dfd370dff5c4a5f569",
  measurementId: "G-N0ZJ5SRMPG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
