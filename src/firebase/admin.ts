/* eslint-disable global-require */
import admin from "firebase-admin";
import config from "../config";

// Check if the app is already initialized
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(config.firebaseServiceAccount as string);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
