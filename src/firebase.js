// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvRnUYS0DUM0XHIMsrio8JZPjnh26uufM",
  authDomain: "nepp-librarymanager-9b192.firebaseapp.com",
  projectId: "nepp-librarymanager-9b192",
  storageBucket: "nepp-librarymanager-9b192.firebasestorage.app",
  messagingSenderId: "293981600383",
  appId: "1:293981600383:web:eb9e33a4985d23c8ff5d4a",
  measurementId: "G-50E2Y2J3JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);