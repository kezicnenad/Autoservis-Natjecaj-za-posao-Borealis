import React from 'react';
import Vozilo from './Vozilo';

function Modal() {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Vozilo />
      </div>
    </div>
  );
}

export default Modal;