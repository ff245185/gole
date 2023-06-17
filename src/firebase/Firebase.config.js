// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjuzPnjnhW3A56Tvbf1BQMLyYq1YErgZA",
  authDomain: "golop-a9384.firebaseapp.com",
  projectId: "golop-a9384",
  storageBucket: "golop-a9384.appspot.com",
  messagingSenderId: "148536473734",
  appId: "1:148536473734:web:02ee08472c40c6aeb03907",
  measurementId: "G-FVYWKGQTPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;