import { initializeApp } from "firebase/app";

// NOTE: In a real environment, use process.env.REACT_APP_FIREBASE_XXX
// This is a placeholder configuration.
const firebaseConfig = {
  apiKey: process.env.API_KEY || "AIzaSyDummyKey-PlaceHolder",
  authDomain: "give-it-back-app.firebaseapp.com",
  projectId: "give-it-back-app",
  storageBucket: "give-it-back-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
  measurementId: "G-ABCDEF"
};

// Initialize Firebase safely
let app;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.warn("Firebase initialization failed (expected if no valid keys provided):", error);
}

export { app };
