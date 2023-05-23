// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuyYesZKSGDmuF0WoBg2lKhB_nLKX47n4",
  authDomain: "auth-development-8bea4.firebaseapp.com",
  projectId: "auth-development-8bea4",
  storageBucket: "auth-development-8bea4.appspot.com",
  messagingSenderId: "531797124512",
  appId: "1:531797124512:web:fb4aad29246e32c8ceb0c5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;





// // Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// //import firebase from 'firebase/app';
// import 'firebase/firestore'
// //import { initializeApp } from "firebase/app";

// //import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBuyYesZKSGDmuF0WoBg2lKhB_nLKX47n4",
//   authDomain: "auth-development-8bea4.firebaseapp.com",
//   projectId: "auth-development-8bea4",
//   storageBucket: "auth-development-8bea4.appspot.com",
//   messagingSenderId: "531797124512",
//   appId: "1:531797124512:web:fb4aad29246e32c8ceb0c5"
// };

// // Initialize Firebase
// //const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const db=firebase.firestore();
// const auth= firebase.auth();
// export {auth};
// export default db;







// // import firebase from  'firebase/app';
// // import "firebase/auth";

// // const app=firebase.initializeApp({
// //     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //     projectId:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //     storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //     messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //     appId:process.env.REACT_APP_FIREBASE_APP_ID

// // });
// // export const auth = app.auth()
// // export default app
// // export default firebase;