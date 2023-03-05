import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Error from './components/404';
import Header from './components/Header';
import Home from './components/Home';
import ProductInfo from './components/ProductInfo';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/:id' element={<ProductInfo />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
