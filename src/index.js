import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyCSsicozQdYnYPMG3lqAgMVqU5T4EnPTok",
  authDomain: "chill-mood-club.firebaseapp.com",
  projectId: "chill-mood-club",
  storageBucket: "chill-mood-club.appspot.com",
  messagingSenderId: "665386257819",
  appId: "1:665386257819:web:7b00c2dc7fc80f4dba653e",
  measurementId: "G-M1RQD8DGV6"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
