// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIXm5_BibmJOX2kc5tukhbaW8mHW4uoro",
  authDomain: "react-2022-a694b.firebaseapp.com",
  projectId: "react-2022-a694b",
  storageBucket: "react-2022-a694b.appspot.com",
  messagingSenderId: "719167955093",
  appId: "1:719167955093:web:15d29f8e3586cae233fb9c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}