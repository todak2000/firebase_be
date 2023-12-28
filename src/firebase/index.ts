import { initializeApp } from 'firebase/app';
import config from '../config/index.js';

const firebase = initializeApp(config.firebaseConfig);

export default firebase;