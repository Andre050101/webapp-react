import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Navbar from './components/Navbar'

function App() {
 return (
  <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  </Router>
 );
}

export default App;
