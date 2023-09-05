import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IProducCart, useGlobalData } from "../context/GlobalDataContext";

const AddToCart: React.FC = () => {
  const { selectedProd, prodInCart, setProdInCart, setSelectedProd } = useGlobalData();
  const [quantity, setQuantity] = useState(0); // État local pour stocker la quantité

  const handleAddToCart = () => {
    if (selectedProd) {
      if (quantity === 0) {
        alert("Veuillez saisir la quantité");
      } else {
        const prodToCart: IProducCart = {
          ref: selectedProd.ref,
          familly: selectedProd.familly,
          price: selectedProd.price,
          quantity: quantity,
          designation: selectedProd.designation,
          amount: quantity * selectedProd.price,
        };

        const updatedProdInCart = prodInCart || [];

        setProdInCart([...updatedProdInCart, prodToCart]);

        setQuantity(0);
        setSelectedProd(null);
      }
    } else {
      alert("Veuillez sélectionner un produit");
    }
  };

  return (
    <div className="d-flex flex-column gap-2">
      <Form>
        <Form.Group>
          <Form.Label>Quantité</Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      <div className="d-flex gap-2">
        <Button
          variant="danger"
          className="d-flex justify-content-center align-items-center"
        >
          <span className="material-icons-outlined">clear</span>
        </Button>
        <Button
          variant="primary"
          className="d-flex justify-content-center align-items-center"
          onClick={handleAddToCart}
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
