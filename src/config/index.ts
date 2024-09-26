import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MAILERSEND_API_TOKEN,
  EMAIL_DOMAIN_URL,
  SERVICE_ACCOUNT
} = process.env;

assert(PORT, "Port is required");
assert(HOST, "Host is required");

const SwaggerVersion = "1.0.0";
const SwaggerTitle = "Gidillo API documentation";
const SwaggerDescription = "Gidillo API documentation";

export default {
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  mailSenderToken:MAILERSEND_API_TOKEN,
  emailDomainUrl:EMAIL_DOMAIN_URL,
  firebaseServiceAccount:SERVICE_ACCOUNT,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  },
  SwaggerVersion,
  SwaggerDescription,
  SwaggerTitle,
};
