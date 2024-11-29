import React from 'react'
import Login from './component/Login'
import Signup from './component/Signup'
import { Router } from 'express'
import Home from './component/Home'

function App() {
  return (
    
    <Router>
    <div>
      <nav>
        <Link to="/">User managment</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
    </div>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/" element={<Home/>} />
        
    </Routes>
    </Router>
  );
}



export default App;