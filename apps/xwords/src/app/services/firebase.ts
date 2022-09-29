import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6eTXmJg_VyAHY6LbYfe2El8Ui6LpneQE",
  authDomain: "xwords-404.firebaseapp.com",
  databaseURL: "https://xwords-404.firebaseio.com",
  projectId: "xwords-404",
  storageBucket: "xwords-404.appspot.com",
  messagingSenderId: "199044458861",
  appId: "1:199044458861:web:7933c1c4dc1c5158639264",
  measurementId: "G-DWREF344Y1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
