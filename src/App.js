import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/react-rmdb' element={<Home />} />
        <Route path='react-rmdb/:movieId' exact element={<Movie />} />
        <Route path='react-rmdb/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
