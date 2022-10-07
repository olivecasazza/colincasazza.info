import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDip6sCeLVodJ4np58hQFzRRG6T3Ppt_RQ",
  authDomain: "nullspace.firebaseapp.com",
  databaseURL: "https://nullspace.firebaseio.com",
  projectId: "nullspace",
  storageBucket: "nullspace.appspot.com",
  messagingSenderId: "630187191701",
  appId: "1:630187191701:web:452f8822764f849fee1a9c",
  measurementId: "G-6M8T4LSY7N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
