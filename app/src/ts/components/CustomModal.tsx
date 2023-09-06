import React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { useGlobalData } from "../context/GlobalDataContext";

const CustomModal: React.FC = () => {
  const { modal,setModalClose } = useGlobalData();

  if (!modal.isOpen) {
    return null; 
  }

  console.log(modal.submitLabel);
  

  return (
    <>
      <BootstrapModal centered show={modal.isOpen} onHide={setModalClose} > 
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>
            <h1 className="text-capitalize">
              {modal.title}
            </h1>
          </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={setModalClose}  >
            Close
          </Button>
          <Button variant="primary" className="text-capitalize" >
            {!modal.submitLabel ? "Enregistrer" : modal.submitLabel}
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
};

export default CustomModal;
