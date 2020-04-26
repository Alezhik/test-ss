import React from 'react';
import logo from './logo.svg';
import './App.css';
import enterData from './data';
import JsonUi from './jsonUi';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <JsonUi data={enterData} />
    </div>
  );
}

export default App;
