import React, { useState, useEffect, useContext } from "react";
import { kontaktContext, handleSaveKontaktContext } from '../App';

function Kontakt({ handleScreen }) {

  const kontakt = useContext(kontaktContext);
  const handleSaveKontakt = useContext(handleSaveKontaktContext);

  const [imePrezime, setImePrezime] = useState("");
  const [mail, setMail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [napomena, setNapomena] = useState("");

  useEffect(() => {
    setImePrezime(kontakt.ime_i_prezime);
    setMail(kontakt.mail);
    setTelefon(kontakt.telefon);
    setNapomena(kontakt.napomena);
  }, []);

  const saveKontakt = () => {
    handleScreen(4);
    handleSaveKontakt(imePrezime, mail, telefon, napomena);
  }

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Vaši kontakt podaci
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body form-group">
            <input
              type="text"
              placeholder="Ime i prezime"
              className="form-control unos"
              value={imePrezime}
              onChange={(e) => setImePrezime(e.target.value)}
            />
            <input
              type="email"
              placeholder="Mail"
              className="form-control unos"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type="phone"
              placeholder="Telefon"
              className="form-control unos"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
            <input
              type="text"
              placeholder="Napomena"
              className="form-control unos"
              value={napomena}
              onChange={(e) => setNapomena(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(2)}
            >
              Nazad
            </button>
            {(imePrezime !== '' && mail !== '' && telefon !== '') ? 
            (<button
              type="button"
              className="btn btn-primary"
              onClick={() => saveKontakt()}
            >
              Dalje
            </button>) : 
            (<button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(4)}
              disabled
            >
              Dalje
            </button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
