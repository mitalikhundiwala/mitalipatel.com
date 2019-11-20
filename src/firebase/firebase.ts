import * as firebase from 'firebase/app';
import 'firebase/analytics';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
firebase.initializeApp(config);
if (activeEnv !== 'development') {
    firebase.analytics().logEvent('page_view', {});
}
