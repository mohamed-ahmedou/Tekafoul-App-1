// App.jsx

import React, { useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Assurez-vous d'importer les styles CSS d'AOS
import './App.css';
import Home from './views/Home';

const Appcontent = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={null}>
      <Appcontent />
    </Suspense>
  );
};

export default App;
