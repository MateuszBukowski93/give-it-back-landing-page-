import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";

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
let analytics;

try {
  app = initializeApp(firebaseConfig);
  // Check if we are in a browser environment before initializing analytics
  if (typeof window !== 'undefined') {
    isAnalyticsSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
        console.log("Firebase Analytics initialized");
      }
    });
  }
} catch (error) {
  console.warn("Firebase initialization failed (expected if no valid keys provided):", error);
}

export { app, analytics };
