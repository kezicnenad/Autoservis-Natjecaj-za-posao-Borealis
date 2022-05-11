import React, { useState } from "react";

function Vozilo({ handleScreen, vozila, handleVozilo }) {
  const [odabir, setOdabir] = useState('');

  const handleOdabir = () => {
    handleVozilo(odabir);
    handleScreen(2);
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Odaberite proizvođača vašeg vozila
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {vozila &&
              vozila.map((vozilo) => (
                <div className="form-check" key={vozilo.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={vozilo.id}
                    onClick={(e) => setOdabir(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    {vozilo.naziv}
                  </label>
                </div>
              ))}
          </div>
          <div className="modal-footer">
            {odabir && odabir !== "" ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleOdabir()}
              >
                Dalje
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleOdabir()}
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

export default Vozilo;
