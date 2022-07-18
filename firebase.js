// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMO66BOYbdpgQjoIEi6JlJI_3xk10Okgs",
  authDomain: "twitter-clone-kelv.firebaseapp.com",
  projectId: "twitter-clone-kelv",
  storageBucket: "twitter-clone-kelv.appspot.com",
  messagingSenderId: "179672450041",
  appId: "1:179672450041:web:79ff66419a552dc1273328",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
