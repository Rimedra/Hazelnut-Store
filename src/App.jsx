import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import HomePage from './pages/HomePage.jsx';
import ProductSection from './components/ProductSection.jsx';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App
