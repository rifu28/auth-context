// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY5nDjDGSCt44VPPubcsjDl8cRL_xf8XM",
  authDomain: "auth-context-34049.firebaseapp.com",
  projectId: "auth-context-34049",
  storageBucket: "auth-context-34049.appspot.com",
  messagingSenderId: "990219452741",
  appId: "1:990219452741:web:15f3ed9f0acf8b9956be2c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
