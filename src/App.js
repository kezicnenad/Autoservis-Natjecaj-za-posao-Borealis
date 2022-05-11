import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {

  const [screen, setScreen] = useState(1);

  const handleScreen = (num) => {
    setScreen(num);
  }

  return (
    <div className="App">
      <h1>App</h1>
      <Modal
        handleScreen={handleScreen}
        screen={screen}
      />
    </div>
  );
}

export default App;
