import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {

  const [screenVozilo, setScreenVozilo] = useState(false);
  const [screenUsluge, setScreenUsluge] = useState(false);
  const [screenUslugeUkupno, setScreenUslugeUkupno] = useState(false);
  const [screenKontakt, setScreenKontakt] = useState(false);
  const [screenPregled, setScreenPregled] = useState(false);
  const [screenPoslano, setScreenPoslano] = useState(false);

  return (
    <div className="App">
      <h1>App</h1>
      <Modal />
    </div>
  );
}

export default App;
