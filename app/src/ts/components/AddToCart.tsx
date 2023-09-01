import React from "react";
import { Form, Button } from "react-bootstrap";

const AddToCart: React.FC = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <Form>
        <Form.Group>
          <Form.Label>Quantité</Form.Label>
          <Form.Control type="number" min={0} />
        </Form.Group>
      </Form>
      <div className="d-flex gap-2">
        <Button
          variant="danger"
          className="d-flex justify-content-center align-items-center"
        >
          <span className="material-icons-outlined ">clear</span>
        </Button>
        <Button
          variant="primary"
          className="d-flex justify-content-center align-items-center"
        >
          <span className="material-icons-outlined">add_shopping_cart</span>
        </Button>
        <Button
          variant="primary"
          className="d-flex justify-content-center align-items-center"
        >
          <span className="material-icons-outlined">euro</span>
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
