import './scss/App.scss';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
}
