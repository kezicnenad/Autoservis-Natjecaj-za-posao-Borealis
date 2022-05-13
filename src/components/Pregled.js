import React, { useContext } from "react";
import {
  odabranoVoziloContext,
  kontaktContext,
  uslugeContext,
  uslugeSumaContext,
  kuponUsedContext,
} from "../App";

function Pregled({ handleScreen }) {

  const odabranoVozilo = useContext(odabranoVoziloContext);
  const kontakt = useContext(kontaktContext);
  const usluge = useContext(uslugeContext);
  const uslugeSuma = useContext(uslugeSumaContext);
  const kuponUsed = useContext(kuponUsedContext);

  console.log(odabranoVozilo);

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Pregled i potvrda vašeg odabira
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Molimo vas da još jednom pregledate i potvrdite unesene podatke.
              Ukoliko želite promjeniti neki od podataka, možete pritisnuti gumb
              za uređivanje pored svake od kategorija. Kada ste provjerili i
              potvrdili ispravnost svojih podataka pritisnite gumb pošalji na
              dnu, za slanje upita za servis
            </p>
            <div className="body-2">
              <p>
                MODEL VOZILA{" "}
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => handleScreen(1)}
                >
                  Uredi
                </button>
              </p>
              <p>{odabranoVozilo[0].naziv} </p>
            </div>
            <div className="body-2">
              <p>
                ODABRANE USLUGE{" "}
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => handleScreen(2)}
                >
                  Uredi
                </button>
              </p>
              {usluge &&
                usluge
                  .filter((usluga) => usluga.odabrano === true)
                  .map((usluga) => (
                    <p key={usluga.id}>
                      {usluga.naziv_usluge} {usluga.cijena.toFixed(2) + "kn"}
                    </p>
                  ))}
              {kuponUsed === false ? (
                <p>Ukupno: {uslugeSuma().toFixed(2) + "kn"}</p>
              ) : (
                <>
                  <p>Popust (30%): {(uslugeSuma() * 0.3).toFixed(2) + "kn"}</p>
                  <p>Ukupno: {(uslugeSuma() * 0.7).toFixed(2) + "kn"}</p>
                </>
              )}
            </div>

            <div className="body-2">
              <p>
                KONTAKT PODACI{" "}
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => handleScreen(3)}
                >
                  Uredi
                </button>
              </p>
              <p>Ime i prezime: {kontakt.ime_i_prezime}</p>
              <p>Mail: {kontakt.mail}</p>
              <p>Telefon: {kontakt.telefon}</p>
              {kontakt.napomena !== '' && <p>Napomena: {kontakt.napomena}</p>}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(3)}
            >
              Nazad
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(5)}
            >
              Dalje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pregled;
