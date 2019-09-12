import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey motherfucker, i was changed!
        </p>
        <a
          className="App-link"
          href="https://docker.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to build docker images!
        </a>
      </header>
    </div>
  );
}

export default App;
