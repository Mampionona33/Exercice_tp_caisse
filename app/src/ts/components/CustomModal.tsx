import React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import { useGlobalData } from "../context/GlobalDataContext";

const CustomModal: React.FC = () => {
  const { modal } = useGlobalData();

  return (
    <>
      <BootstrapModal  > 
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{modal.title}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            {/* {!submitLabel ? "Enregistrer" : submitLabel} */}
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
};

export default CustomModal;
