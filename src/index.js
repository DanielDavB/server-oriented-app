import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import firebaseConfig from './firebase-config';
import{
  FirebaseAppProvider 
} from 'reactfire'

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App /> {/* Render the App component */}
    </FirebaseAppProvider>,
  document.getElementById('root')
);
