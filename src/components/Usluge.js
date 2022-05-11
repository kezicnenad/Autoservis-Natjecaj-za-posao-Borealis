import React from "react";

function Usluge({ handleScreen, usluge, handleUsluge }) {



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
                <div
                  className="form-check"
                  key={usluga.id}
                  onClick={(e) => handleUsluge(usluga.id)}
                >
                  {usluga.odabrano === true ? (
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked
                      onChange={(e) => {}}
                    />
                  ) : (
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onChange={(e) => {}}
                    />
                  )}
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {usluge && usluga.naziv_usluge}{" "}
                    {usluge && usluga.cijena} kn
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

            {usluge.filter((usluga) => usluga.odabrano === true).length > 0
              ? "da"
              : "ne"}

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScreen(3)}
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