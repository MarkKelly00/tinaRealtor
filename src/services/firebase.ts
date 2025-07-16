import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgVa928sALItURXmPuoH3EnilJrNQCn0c",
  authDomain: "nw-corner-living.firebaseapp.com",
  projectId: "nw-corner-living",
  storageBucket: "nw-corner-living.appspot.com",
  messagingSenderId: "526659389436",
  appId: "1:526659389436:web:4774f1829b514b4e3f1479",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 