 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDHpJRyH9ABYhYehEB9cmSwnMmp5viHCqA",
   authDomain: "i-mpact.firebaseapp.com",
   databaseURL: "https://i-mpact-default-rtdb.firebaseio.com",
   projectId: "i-mpact",
   storageBucket: "i-mpact.appspot.com",
   messagingSenderId: "929251158063",
   appId: "1:929251158063:web:3c2773382c2a52187dfeda",
   measurementId: "G-JWVB2TJ560"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();