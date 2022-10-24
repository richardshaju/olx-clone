import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './Store/FirebaseContext';
import Context from './Store/FirebaseContext'
import firebase from './Firebase/config'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <React.StrictMode>
        <App />
      </React.StrictMode >
    </Context>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
