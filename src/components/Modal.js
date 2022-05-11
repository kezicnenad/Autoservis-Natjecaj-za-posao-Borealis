import React from 'react';

import Vozilo from './Vozilo';
import  Usluge from './Usluge';
import UslugeUkupno from './UslugeUkupno';
import Kontakt from './Kontakt';
import Pregled from './Pregled';
import Poslano from './Poslano';

function Modal({handleScreen, screen}) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => handleScreen(1)}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {screen === 1 ? (
          <Vozilo handleScreen={handleScreen} />
        ) : screen === 2 ? (
          <Usluge handleScreen={handleScreen} />
        ) : screen === 3 ? (
          <UslugeUkupno handleScreen={handleScreen} />
        ) : screen === 4 ? (
          <Kontakt handleScreen={handleScreen} />
        ) : screen === 5 ? (
          <Pregled handleScreen={handleScreen} />
        ) : (
          screen === 6 && <Poslano handleScreen={handleScreen} />
        )}
      </div>
    </div>
  );
}

export default Modal;