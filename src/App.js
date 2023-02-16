import './scss/App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Calculator />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
