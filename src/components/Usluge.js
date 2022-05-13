import React, { useContext, useState } from "react";
import {
  uslugeContext,
  handleUslugeContext,
  uslugeSumaContext,
  kuponContext,
  kuponUsedContext,
  handleKuponContext
} from "../App";

function Usluge({ handleScreen }) {

  const usluge = useContext(uslugeContext);
  const handleUsluge = useContext(handleUslugeContext);
  const uslugeSuma = useContext(uslugeSumaContext);
  const kupon = useContext(kuponContext);
  const kuponUsed = useContext(kuponUsedContext);
  const handleKupon = useContext(handleKuponContext);

  const [input, setInput] = useState("");
  const [kuponInUse, setKuponInUse] = useState(false);
  const [error, setError] = useState('');

  const handlePotvrdi = (e) => {
    handleScreen(3);
  };

  const provjeriKupon = () => {
    // setKuponUsed(false);
    if (input === kupon) {
      console.log('');
      handleKupon();
      setError();
    } else {
      setError('Nevažeći kupon');
    }
    setInput("");
  };

  const provjera = () => {
    const filter = usluge.filter((usluga) => usluga.odabrano === true);
    if (filter.length > 0){ 
      return true;
      } else {
        return false;
      };
  }

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Odaberite jednu ili više usluga
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {usluge &&
              usluge.map((usluga, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onChange={() =>
                      handleUsluge(
                        usluga.id,
                        usluga.naziv_usluge,
                        usluga.cijena
                      )
                    }
                    checked={usluga.odabrano}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {usluga && usluga.naziv_usluge}{" "}
                    {usluga && usluga.cijena.toFixed(2)} kn
                  </label>
                </div>
              ))}

            <div className="body-2 form-group">
              {kuponInUse === false && kuponUsed === false ? (
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setKuponInUse(true)}
                >
                  Imam kupon
                </button>
              ) : kuponUsed === false ? (
                <>
                  <p>Kupon</p>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Kupon"
                    name="kupon"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <p className='error'>{error}</p>
                  <button
                    style={{ marginTop: 20 }}
                    className="btn btn-sm btn-primary"
                    onClick={() => provjeriKupon()}
                  >
                    Primjeni
                  </button>
                </>
              ) : (
                <>
                  <p>Hvala vam, unijeli ste ispravan kod kupona</p>
                </>
              )}
            </div>

            <div className="body-2">
              {kuponUsed === false ? (
                <p>
                  Ukupno: <b>{usluge && uslugeSuma().toFixed(2)} kn</b>
                </p>
              ) : (
                <>
                  <p>
                    Osnovica: <b>{usluge && uslugeSuma().toFixed(2)} kn</b>
                  </p>
                  <p>
                    Popust (30%):{" "}
                    <b>-{usluge && (uslugeSuma() * 0.3).toFixed(2)} kn</b>
                  </p>
                  <p>
                    Ukupno:{" "}
                    <b>{usluge && (uslugeSuma() * 0.7).toFixed(2)} kn</b>
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(1)}
            >
              Nazad
            </button>

            {provjera() ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handlePotvrdi(e)}
              >
                Dalje
              </button>
            ) :
            (
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handlePotvrdi(e)}
                disabled
              >
                Dalje
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;