import React, { useEffect, useContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/SignUpPage';
import Login from './Pages/LoginPage';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext'
import Sell from './Components/Sell/Sell';

function App() {
  const {user , setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/olx-clone" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
