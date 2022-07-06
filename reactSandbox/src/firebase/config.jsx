import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtppkzD799_TWHUMzPfUCCqcVKeRpRCsI",
  authDomain: "to-do-list-dbbb9.firebaseapp.com",
  projectId: "to-do-list-dbbb9",
  storageBucket: "to-do-list-dbbb9.appspot.com",
  messagingSenderId: "772891129980",
  appId: "1:772891129980:web:4fd7b0661be9277a61b1f9"
};

initializeApp(firebaseConfig);

const dataBase = getFirestore();
const auth = getAuth();

export { dataBase, auth };