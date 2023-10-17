
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Exec.</h1>
      </header>
      <div className="buttons">
        <button onClick={() => window.location.href='https://www.instagram.com'}>Connect: @Exec.Studios</button>
        <button onClick={() => window.location.href='https://www.yourwebsite.com'}>AV</button>
        <button>Third Button</button>
      </div>
    </div>
  );
}

export default App;
