import React, { useContext, useState } from "react";
import { uslugeContext } from '../App';

function Usluge({ handleScreen }) {

  const usluge = useContext(uslugeContext);

  const [odabrano, setOdabrano] = useState([]);

  const handleOdabir = (id) => {
    console.log(id);
  }

  const handlePotvrdi = (e) => {
    // e.preventDefault();
    // handleOdaberiVozilo(odabrano);
    // handleScreen(3);
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
              usluge.map((usluga) => (
                <div className="form-check" key={usluga.id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={(e)=>handleOdabir(usluga.id)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {usluga.naziv_usluge}
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