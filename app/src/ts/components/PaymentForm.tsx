import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useGlobalData } from "../context/GlobalDataContext";

const PaymentForm: React.FC = () => {
  const [argentRecu, setArgentRecu] = useState<number | string>("");
  const { prodInCart } = useGlobalData();

  const calculateTotalPrice = () => {
    if (prodInCart) {
      return prodInCart.reduce((acc, curr) => acc + curr.amount!, 0);
    }
    return 0;
  };

  const calculateMoneyToReturn = () => {
    const argentRecuValue = parseFloat(argentRecu.toString());
    if (isNaN(argentRecuValue)) {
      return "";
    }

    console.log(calculateTotalPrice());
    console.log(argentRecuValue);

    const argentARendre = argentRecuValue - calculateTotalPrice();
    // Ajoutez une vérification pour éviter les montants négatifs
    const montantRendu = argentARendre >= 0 ? argentARendre.toFixed(2) : 0;

    return montantRendu;
  };

  return (
    <>
      <Form className="d-flex gap-3 flex-column">
        <Form.Group controlId="form.argentRecu">
          <Form.Label className="text-capitalize">Argent reçu</Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={argentRecu}
            onChange={(e) => setArgentRecu(e.target.value)}
            placeholder="Argent reçu en euros"
            required
          />
        </Form.Group>
        <div className="bg-success p-2 text-white" >
          À rendre : <span>{calculateMoneyToReturn()}</span> €
        </div>
      </Form>
    </>
  );
};

export default PaymentForm;
