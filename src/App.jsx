import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.module.css';


function App() {
 return (
  <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
  </Router>
 );
}

export default App;
