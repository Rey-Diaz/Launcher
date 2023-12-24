import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

// Ensure that your environment variables are prefixed with REACT_APP_
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase only if the configuration is available
const app = initializeApp(firebaseConfig);
console.log("API Key:", import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY);

// Export the authentication module
export const auth = getAuth(app);