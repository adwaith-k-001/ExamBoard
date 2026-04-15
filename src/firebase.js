import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzLDb0xS9EPEDJh15FUFsdoAgSdx_b4hU",
  authDomain: "examboard-b09ea.firebaseapp.com",
  projectId: "examboard-b09ea",
  storageBucket: "examboard-b09ea.firebasestorage.app",
  messagingSenderId: "273120514450",
  appId: "1:273120514450:web:c742aec704fd52b51a314b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
