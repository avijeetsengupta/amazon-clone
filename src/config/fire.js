import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBlOJexoieBjONyoURAogkOzWPlA0FE0AQ",
    authDomain: "challenge-95183.firebaseapp.com",
    projectId: "challenge-95183",
    storageBucket: "challenge-95183.appspot.com",
    messagingSenderId: "948242866251",
    appId: "1:948242866251:web:6f41ba4915745e7fbeedce",
    measurementId: "G-KFQLECECN4"
  };
  
 
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
