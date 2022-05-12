import React from 'react';

import Vozilo from './Vozilo';
import Usluge from './Usluge';
import Kontakt from './Kontakt';
import Pregled from './Pregled';
import Poslano from './Poslano';

function Modal({
  handleScreen,
  screen,
  vozila,
  odabranoVozilo,
  handleVozilo,
  usluge,
  handleUsluge,
}) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => handleScreen(1)}
      >
        Pokreni konfigurator
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {screen === 1 ? (
          <Vozilo
            handleScreen={handleScreen}
            vozila={vozila}
            handleVozilo={handleVozilo}
          />
        ) : screen === 2 ? (
          <Usluge handleScreen={handleScreen} usluge={usluge} handleUsluge={handleUsluge} />
        ) : screen === 3 ? (
          <Kontakt handleScreen={handleScreen} />
        ) : screen === 4 ? (
          <Pregled handleScreen={handleScreen} />
        ) : (
          screen === 5 && <Poslano handleScreen={handleScreen} />
        )}
      </div>
    </div>
  );
}

export default Modal;