// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCDjhU5i7A94_7f4gXNXHe_-dvKbsCuBNg",
//   authDomain: "dragon-news-2f790.firebaseapp.com",
//   projectId: "dragon-news-2f790",
//   storageBucket: "dragon-news-2f790.appspot.com",
//   messagingSenderId: "170690568442",
//   appId: "1:170690568442:web:2073388baa0a9bbfe9a943"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
