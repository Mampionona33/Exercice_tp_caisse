import React from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const LabelTotalPrice: React.FC = () => {
  const { prodInCart } = useGlobalData();

  const calculateTotalPrice = () => {
    if (prodInCart) {
      return prodInCart.reduce((acc, curr) => acc + curr.amount!, 0);
    }
    return 0;
  };

  return (
    <div className="bg-success d-flex justify-content-center">
      <h2 className="text-white">Net à payer : {calculateTotalPrice()} €</h2>
    </div>
  );
};

export default LabelTotalPrice;
