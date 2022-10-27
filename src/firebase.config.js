import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAenOEijodpG_wpNDSO2sJ7NANogN3A-aQ",
  authDomain: "programming-academy-app.firebaseapp.com",
  projectId: "programming-academy-app",
  storageBucket: "programming-academy-app.appspot.com",
  messagingSenderId: "779371799391",
  appId: "1:779371799391:web:21c4cd0142b41274f14cea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}