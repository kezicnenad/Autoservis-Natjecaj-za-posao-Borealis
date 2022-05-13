import React, { useState, useEffect, createContext } from 'react';
import Modal from './components/Modal';
import './App.css';

export const vozilaContext = createContext();
export const uslugeContext = createContext();
export const handleOdaberiVoziloContext = createContext();
export const handleUslugeContext = createContext();
export const uslugeSumaContext = createContext();
export const kuponContext = createContext();
export const kuponUsedContext = createContext();
export const handleKuponContext = createContext();
export const kontaktContext = createContext();
export const handleSaveKontaktContext = createContext();
export const odabranoVoziloContext = createContext();
export const posaljiPodatkeContext = createContext();

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
      odabrano: false,
    },
    {
      id: 2,
      naziv_usluge: "Promjena pakni",
      cijena: 450,
      odabrano: false,
    },
    {
      id: 3,
      naziv_usluge: "Promjena guma",
      cijena: 100,
      odabrano: false,
    },
    {
      id: 4,
      naziv_usluge: "Servis klima uređaja",
      cijena: 299,
      odabrano: false,
    },
    {
      id: 5,
      naziv_usluge: "Balansiranje guma",
      cijena: 50,
      odabrano: false
    },
    {
      id: 6,
      naziv_usluge: "Zamjena ulja u kočnicama",
      cijena: 229,
      odabrano: false,
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
  const [kuponUsed, setKuponUsed] = useState(false);

  const handleScreen = (num) => {
    setScreen(num);
  };

  const handleOdaberiVozilo = (id) => {
    const filter = vozila.filter((vozilo) => vozilo.id === id);
    setOdabranoVozilo(filter);
  };

  const handleUsluge = (id, naziv, cijena) => {

    const ostale = usluge.filter((usluga) => usluga.id !== id);
    const filter = usluge.filter((usluga) => usluga.id === id);
    const filtrat = filter[0];

    if (filtrat.odabrano === false){
      setUsluge([...ostale, {id: id, naziv_usluge: naziv, cijena: cijena, odabrano: true}]);
    } else {
      setUsluge([...ostale, { id: id, naziv_usluge: naziv, cijena: cijena, odabrano: false }]);
    }
  };

  const uslugeSuma = () => {
    let suma = 0;
    usluge
      .filter((usluga) => usluga.odabrano === true)
      .map((usluga) => {
        suma += usluga.cijena;
      });
    return suma;
  };

  const handleKupon = () => {
    setKuponUsed(true);
  }

  const handleSaveKontakt = (ime, mail, telefon, napomena) => {
    // console.log("IME", ime);
    // console.log("MAIL", mail);
    // console.log("TELEFON", telefon);
    // console.log("NAPOMENA", napomena);
    setKontakt({
      ime_i_prezime: ime,
      mail: mail,
      telefon: telefon,
      napomena: napomena
    })
  }

  const posaljiPodatke = () => {
    setUsluge([
      {
        id: 1,
        naziv_usluge: "Zamjena ulja i filtera",
        cijena: 500,
        odabrano: false,
      },
      {
        id: 2,
        naziv_usluge: "Promjena pakni",
        cijena: 450,
        odabrano: false,
      },
      {
        id: 3,
        naziv_usluge: "Promjena guma",
        cijena: 100,
        odabrano: false,
      },
      {
        id: 4,
        naziv_usluge: "Servis klima uređaja",
        cijena: 299,
        odabrano: false,
      },
      {
        id: 5,
        naziv_usluge: "Balansiranje guma",
        cijena: 50,
        odabrano: false,
      },
      {
        id: 6,
        naziv_usluge: "Zamjena ulja u kočnicama",
        cijena: 229,
        odabrano: false,
      },
    ]);

    setKontakt({
      ime_i_prezime: "",
      mail: "",
      telefon: "",
      napomena: "",
    });
    setOdabranoVozilo({});
    setKuponUsed(false);
  }

  return (
    <div className="App">
      <posaljiPodatkeContext.Provider value={posaljiPodatke}>
      <odabranoVoziloContext.Provider value={odabranoVozilo}>
        <handleSaveKontaktContext.Provider value={handleSaveKontakt}>
          <kontaktContext.Provider value={kontakt}>
            <handleKuponContext.Provider value={handleKupon}>
              <kuponUsedContext.Provider value={kuponUsed}>
                <kuponContext.Provider value={kupon}>
                  <uslugeSumaContext.Provider value={uslugeSuma}>
                    <handleUslugeContext.Provider value={handleUsluge}>
                      <handleOdaberiVoziloContext.Provider
                        value={handleOdaberiVozilo}
                      >
                        <vozilaContext.Provider value={vozila}>
                          <uslugeContext.Provider value={usluge}>
                            <Modal
                              handleScreen={handleScreen}
                              screen={screen}
                            />
                          </uslugeContext.Provider>
                        </vozilaContext.Provider>
                      </handleOdaberiVoziloContext.Provider>
                    </handleUslugeContext.Provider>
                  </uslugeSumaContext.Provider>
                </kuponContext.Provider>
              </kuponUsedContext.Provider>
            </handleKuponContext.Provider>
          </kontaktContext.Provider>
        </handleSaveKontaktContext.Provider>
      </odabranoVoziloContext.Provider>
      </posaljiPodatkeContext.Provider>
    </div>
  );
}

export default App;
