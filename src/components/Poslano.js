import React, {useContext} from "react";
import {posaljiPodatkeContext} from '../App';

function Poslano({ handleScreen }) {

  const posaljiPodatke = useContext(posaljiPodatkeContext);

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Vaša prijava je uspješno poslana
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={posaljiPodatke}
            >
              Zatvori
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poslano;
