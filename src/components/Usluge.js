import React, { useContext, useState } from "react";
import { uslugeContext, handleUslugeContext } from '../App';

function Usluge({ handleScreen }) {

  const usluge = useContext(uslugeContext);
  const handleUsluge = useContext(handleUslugeContext);

  const handlePotvrdi = (e) => {
    handleScreen(3);
  };

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
                    onChange={() => handleUsluge(usluga.id, usluga.naziv_usluge, usluga.cijena)}
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(1)}
            >
              Nazad
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handlePotvrdi(e)}
            >
              Dalje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;