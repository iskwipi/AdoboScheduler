import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS3Jbd9OCA_TwJzhKJh4YBXKrjD21VtMw",
  authDomain: "test-50aba.firebaseapp.com",
  projectId: "test-50aba",
  storageBucket: "test-50aba.appspot.com",
  messagingSenderId: "680486662532",
  appId: "1:680486662532:web:e7fe06f8028df6cd9a6dd1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);