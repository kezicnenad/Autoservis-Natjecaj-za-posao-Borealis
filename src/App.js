import React, { useState, useEffect, createContext } from 'react';
import Modal from './components/Modal';
import './App.css';

export const vozilaContext = createContext();
export const uslugeContext = createContext();
export const handleOdaberiVoziloContext = createContext();

function App() {

  const [screen, setScreen] = useState(1);
  const [vozila, setVozila] = useState([
    { id: 1, naziv: "Peugot" },
    { id: 2, naziv: "Volkswagen" },
    { id: 3, naziv: "Citroen" },
    { id: 4, naziv: "Audi" },
    { id: 5, naziv: "Bmw" },
    { id: 6, naziv: "Seat" },
    { id: 7, naziv: "Alfa Romeo" },
    { id: 8, naziv: "Kia" },
    { id: 9, naziv: "Hyundai" },
    { id: 10, naziv: "Honda" },
    { id: 11, naziv: "Toyota" },
  ]);
  const [usluge, setUsluge] = useState([
    {
      id: 1,
      naziv_usluge: "Zamjena ulja i filtera",
      cijena: 500,
    },
    {
      id: 2,
      naziv_usluge: "Promjena pakni",
      cijena: 450,
    },
    {
      id: 3,
      naziv_usluge: "Promjena guma",
      cijena: 100,
    },
    {
      id: 4,
      naziv_usluge: "Servis klima uređaja",
      cijena: 299,
    },
    {
      id: 5,
      naziv_usluge: "Balansiranje guma",
      cijena: 50,
    },
    {
      id: 6,
      naziv_usluge: "Zamjena ulja u kočnicama",
      cijena: 229,
    },
  ]);
  const [kupon, setKupon] = useState('Tokić123');
  const [kontakt, setKontakt] = useState({
    ime_i_prezime: '',
    mail: '',
    telefon: '',
    napomena: ''
  });
  const [odabranoVozilo, setOdabranoVozilo] = useState({});

  const handleScreen = (num) => {
    setScreen(num);
  }

  const handleOdaberiVozilo = (id) => {
    const filter = vozila.filter(vozilo => vozilo.id === id);
    setOdabranoVozilo(filter);
  }

  return (
    <div className="App">
      <h1>App</h1>
      <handleOdaberiVoziloContext.Provider value={handleOdaberiVozilo}>
        <vozilaContext.Provider value={vozila}>
          <uslugeContext.Provider value={usluge}>
            <Modal handleScreen={handleScreen} screen={screen} />
          </uslugeContext.Provider>
        </vozilaContext.Provider>
      </handleOdaberiVoziloContext.Provider>
    </div>
  );
}

export default App;
