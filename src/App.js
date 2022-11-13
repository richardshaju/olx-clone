import React, { useEffect, useContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/SignUpPage';
import Login from './Pages/LoginPage';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext'
import Sell from './Components/Sell/Sell';
import PostView from './Pages/PostViewPage';
import Post from './Store/PostContext'
function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Post>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/post" element={<PostView />} />
          </Routes>
        </Router>
      </Post>
      </div>
      );
}

      export default App;
