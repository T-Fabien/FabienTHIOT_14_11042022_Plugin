import React, { useState } from 'react';
import { Modal } from '../lib/components/Modal';
import done from '../lib/components/assets/hrnet-logo.jpeg';

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Background</h1>
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
        image={done}
        btn="Retour"
      />
    </>
  );
};