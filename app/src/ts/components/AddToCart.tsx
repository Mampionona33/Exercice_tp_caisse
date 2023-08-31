import React from "react";
import { Form, Button } from "react-bootstrap";

const AddToCart: React.FC = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <Form>
        <Form.Group>
          <Form.Label>Quantité</Form.Label>
          <Form.Control type="number" min={0}/>
        </Form.Group>
      </Form>
      <div className="d-flex gap-2">
        <Button variant="danger">Effacer</Button>{" "}
        <Button variant="primary">Ajouter au panier</Button>{" "}
      </div>
    </div>
  );
};

export default AddToCart;
