import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "../config";

const firebase = initializeApp(config.firebaseConfig);
export const db = getFirestore(firebase);
export default firebase;
