import React from "react";

function Pregled({ handleScreen }) {
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
          <div className="modal-body">...</div>
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
