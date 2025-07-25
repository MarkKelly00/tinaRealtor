import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import type { Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

// Read environment variables directly or use fallback values
const getEnvVar = (key: string) => {
  const value = import.meta.env[`VITE_${key}`] || import.meta.env[key];
  return value || '';
};

const firebaseConfig = {
  apiKey: getEnvVar('FIREBASE_API_KEY'),
  authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('FIREBASE_APP_ID'),
};

// Check if we have the minimum required configuration
const hasMinConfig = firebaseConfig.apiKey && firebaseConfig.projectId;

// Initialize Firebase only if we have the required configuration
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

try {
  if (hasMinConfig) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase configuration is incomplete. Firebase features will not be available.');
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export { app, auth, db };
export default app; 