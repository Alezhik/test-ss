import React from 'react';
import logo from './logo.svg';
import './App.css';
import enterData from './data';
import JsonUi from './jsonUi';
import CustomState from './customState';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <JsonUi data={enterData} />
      <br />
      <CustomState ket="test1" id="test1" />
    </div>
  );
}

export default App;
