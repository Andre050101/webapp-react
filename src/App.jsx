import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Layout from './components/Layout';

function App() {
 return (
  <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
          </Route>
      </Routes>
  </Router>
 );
}

export default App;
