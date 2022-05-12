import React, { useState, useContext } from "react";
import { vozilaContext, handleOdaberiVoziloContext } from '../App';

function Vozilo({ handleScreen }) {

  const vozila = useContext(vozilaContext);
  const handleOdaberiVozilo = useContext(handleOdaberiVoziloContext);

  const [odabrano, setOdabrano] = useState();

  const handleOdabir = (id) => {
    setOdabrano(id);
  };

  const handlePotvrdi = (e) => {
    e.preventDefault();
    handleOdaberiVozilo(odabrano);
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
                    onClick={() => handleOdabir(vozilo.id)}
                  />
                  {vozilo.naziv}
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  ></label>
                </div>
              ))}
          </div>
          <div className="modal-footer">
            {odabrano && odabrano !== "" ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handlePotvrdi(e)}
              >
                Dalje
              </button>
            ) :
            (<button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handlePotvrdi(e)}
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

export default Vozilo;
