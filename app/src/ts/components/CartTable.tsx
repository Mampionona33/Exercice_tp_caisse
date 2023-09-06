import React from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const CartTable: React.FC = () => {
  const { prodInCart, setProdInCart } = useGlobalData();

  const handleDeleteProd = (ref: number) => {
    // Supprimer le produit avec la référence (ref) donnée du panier
    if (prodInCart) {
      const updatedProdInCart = prodInCart.filter((prod) => prod.ref !== ref);
      setProdInCart(updatedProdInCart);
    }
  };

  const createBody = () => {
    return prodInCart?.map((pro) => {
      return (
        <tr key={pro.ref}>
          <th>{pro.ref}</th>
          <th>{pro.designation}</th>
          <th>{pro.price}</th>
          <th>{pro.quantity}</th>
          <th>{pro.amount}</th>
          <th>
            <button
              onClick={() => handleDeleteProd(pro.ref!)}
              className="btn btn-danger"
            >
              Supprimer
            </button>
          </th>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th className="text-capitalize align-top">Article</th>
          <th className="text-capitalize align-top">Désignation</th>
          <th className="text-capitalize align-top">Prix HT</th>
          <th className="text-capitalize align-top">Quantité</th>
          <th className="text-capitalize align-top">Montant</th>
          <th className="text-capitalize align-top">Action</th>
        </tr>
      </thead>
      <tbody>{createBody()}</tbody>
    </table>
  );
};

export default CartTable;
