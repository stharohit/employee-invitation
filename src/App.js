import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="headerImg" alt="react logo" />
      </header>
      <div className="container">
        <Employee />
      </div>
    </div>
  );
}

export default App;
