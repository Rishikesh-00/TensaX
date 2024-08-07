// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCRARy47W1J7w9tL5A6Fo6EBL4v-RRSQgc",
  authDomain: "sveltekitauth-40280.firebaseapp.com",
  projectId: "sveltekitauth-40280",
  storageBucket: "sveltekitauth-40280.appspot.com",
  messagingSenderId: "92197554638",
  appId: "1:92197554638:web:1d034f14f6c1af70eec39f",
  measurementId: "G-7X27XKMFE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;