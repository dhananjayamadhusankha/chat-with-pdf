import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlED2JxEGyVHv6WxTcXdPJI9fF_DXp0g4",
  authDomain: "chat-with-pdf-235f5.firebaseapp.com",
  projectId: "chat-with-pdf-235f5",
  storageBucket: "chat-with-pdf-235f5.appspot.com",
  messagingSenderId: "466525742717",
  appId: "1:466525742717:web:1ee6cfe75902563fa63314"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}