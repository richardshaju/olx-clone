
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
    </Router>
    </div >
  );
}

export default App;
