// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ProcessingInstruction.env.REACT_APP_APIKEY,
    authDomain: ProcessingInstruction.env.REACT_APP_AUTHDOMAIN,
    projectId: ProcessingInstruction.env.REACT_APP_PROJECTID,
    storageBucket: ProcessingInstruction.env.REACT_APP_SBUCKET,
    messagingSenderId: ProcessingInstruction.env.REACT_APP_MSID,
    appId: ProcessingInstruction.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;