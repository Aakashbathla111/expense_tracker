import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPP9VRo0deGilda2ziS1qG92zWZktpg70",
  authDomain: "blogdemo-99171.firebaseapp.com",
  projectId: "blogdemo-99171",
  storageBucket: "blogdemo-99171.appspot.com",
  messagingSenderId: "461378926924",
  appId: "1:461378926924:web:833d408de9188c7aa877e9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
