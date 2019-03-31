import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCdZNu0PypOPJLsX36Vbq9JsYcjrGN4fcU",
    authDomain: "notereact-1873f.firebaseapp.com",
    databaseURL: "https://notereact-1873f.firebaseio.com",
    projectId: "notereact-1873f",
    storageBucket: "notereact-1873f.appspot.com",
    messagingSenderId: "1020415466273"
  };
  
  firebase.initializeApp(config)
  export const noteData = firebase.database().ref('dataForNote');
