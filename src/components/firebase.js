import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXPRuuY3FHxokJL0x0jCDTibWzFr2mNTg",
  authDomain: "rankquest-c922b.firebaseapp.com",
  databaseURL: "https://rankquest-c922b.firebaseio.com",
  projectId: "rankquest-c922b",
  storageBucket: "rankquest-c922b.appspot.com",
  messagingSenderId: "79269922320",
  appId: "1:79269922320:web:0d3fb003a04ed33ff16c95",
  measurementId: "G-PVBQK1WLHQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
