import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIdQpD9IQiZUh1SEC1fB0rK-1gtLILBxc",
  authDomain: "minihackathon-cd599.firebaseapp.com",
  projectId: "minihackathon-cd599",
  storageBucket: "minihackathon-cd599.appspot.com",
  messagingSenderId: "141737481631",
  appId: "1:141737481631:web:2851daa751a42b265d19aa",
  measurementId: "G-ETPY7183BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); 

export {app,auth,db}