import firebase from "firebase/app";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STOREAGEBUCKET,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBx3vJndLywofDh74kj3ua3I5tYE9ycEGs",
  authDomain: "claritynotes-d3ce3.firebaseapp.com",
  projectId: "claritynotes-d3ce3",
  storageBucket: "claritynotes-d3ce3.appspot.com",
  messagingSenderId: "610601494557",
  appId: "1:610601494557:web:62c3dd7575ad304bfa3ef4",
  measurementId: "G-MGR0K6H310",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
