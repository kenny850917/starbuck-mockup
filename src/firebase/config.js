import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnufxJJxm0ov0xo9Pw3SkJ1--MfN1HGvc",
  authDomain: "starbucksmockup.firebaseapp.com",
  projectId: "starbucksmockup",
  databaseURL: "https://starbucksmockup.firebaseio.com/",
  storageBucket: "starbucksmockup.appspot.com",
  messagingSenderId: "674953643640",
  appId: "1:674953643640:web:bb9e55007938257bc80f8d",
  measurementId: "G-D65ZLGY5WH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
