import {getDatabase} from "firebase/database";
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
function StartFirebase(){
    const firebaseConfig1 = {
        apiKey: "AIzaSyBuyYesZKSGDmuF0WoBg2lKhB_nLKX47n4",
        authDomain: "auth-development-8bea4.firebaseapp.com",
        projectId: "auth-development-8bea4",
        storageBucket: "auth-development-8bea4.appspot.com",
        messagingSenderId: "531797124512",
        appId: "1:531797124512:web:fb4aad29246e32c8ceb0c5"
      };
     const app1=initializeApp(firebaseConfig1);
     return getDatabase(app1);
}

export default StartFirebase;