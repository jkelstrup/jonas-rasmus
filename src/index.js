// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Components
import App from 'src/components/App/App.js';

// Local
import './index.scss';

// var config = {
//   apiKey: "AIzaSyBV7O54R8tXe4NKejlrlkrNhJgcs4wAPP8",
//   authDomain: "cassino-scoreboard.firebaseapp.com",
//   databaseURL: "https://cassino-scoreboard.firebaseio.com",
//   projectId: "cassino-scoreboard",
//   storageBucket: "",
//   messagingSenderId: "996591144449"
// };

const config = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:       process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
