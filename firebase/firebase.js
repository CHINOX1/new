import { firebaseConfig } from "./credenciales.js";


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = firebase.firestore();
