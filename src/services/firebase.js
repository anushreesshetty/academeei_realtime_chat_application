import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
// const firebaseConfig = {
//   apiKey: "AIzaSyCNexJ7p00a9cCe_NCvlN0CfFw7xx0_-kc",
//   authDomain: "chat-room-18213.firebaseapp.com",
//   projectId: "chat-room-18213",
//   storageBucket: "chat-room-18213.appspot.com",
//   messagingSenderId: "637500390783",
//   appId: "1:637500390783:web:d99c8fec19a075a2b8ee4a",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAPp9RmiECLE9oQtQLT-t-JtcIzLaSVi2c",
  authDomain: "academeei.firebaseapp.com",
  databaseURL: "https://academeei-default-rtdb.firebaseio.com",
  projectId: "academeei",
  storageBucket: "academeei.appspot.com",
  messagingSenderId: "187294153967",
  appId: "1:187294153967:web:d2fdfd8e1c66235244ef1a",
  measurementId: "G-QZWNG4VXCH"
};



// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAPp9RmiECLE9oQtQLT-t-JtcIzLaSVi2c",
//   authDomain: "academeei.firebaseapp.com",
//   databaseURL: "https://academeei-default-rtdb.firebaseio.com",
//   projectId: "academeei",
//   storageBucket: "academeei.appspot.com",
//   messagingSenderId: "187294153967",
//   appId: "1:187294153967:web:d2fdfd8e1c66235244ef1a",
//   measurementId: "G-QZWNG4VXCH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);