import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.apikey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: "mrble-illust.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const storage = firebase.storage();

const isDev = process.env.NODE_ENV === "development";
if (isDev) {
  firebase.storage().useEmulator("localhost", 9199);
}

export { storage };
