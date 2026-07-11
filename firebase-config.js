// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpQ6DdI6kE3ETNUtzFFBrhEZTMHxEWJfU",
  authDomain: "edubridge-online-learning.firebaseapp.com",
  projectId: "edubridge-online-learning",
  storageBucket: "edubridge-online-learning.firebasestorage.app",
  messagingSenderId: "457393120653",
  appId: "1:457393120653:web:83a0c47908fc1508ad49c4",
  measurementId: "G-4MMFFGEZSC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };