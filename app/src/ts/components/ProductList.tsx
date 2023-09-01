import React, { useContext, useEffect, useState } from "react";
import { IProduct, ProductListContext, SelectedProdContext } from "../App";
import DataLoader from "../db/DataLoader";

const ProductList: React.FC = () => {
  const productListContext = useContext(ProductListContext);
  const selectedProdContext = useContext(SelectedProdContext);
  const [buttonId, setButtonId] = useState<number | null>(null);

  const handleButtonClicked = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const idProd = parseInt(ev.currentTarget.id);
    setButtonId(idProd);
  };

  useEffect(() => {
    if (buttonId !== null) {
      DataLoader.loadData()
        .then((data) => {
          const selectedProduct: IProduct | undefined = data.products.find(
            (product : IProduct) => product.ref === buttonId
          );
          if (selectedProduct) {
            selectedProdContext.setSelectedProd(selectedProduct);
          }
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des données JSON : ", error);
        });
    }
  }, [buttonId, productListContext]);

  return (
    <>
      <div>Liste des produits</div>
      <div className="d-flex gap-2 flex-wrap">
        {productListContext.productList.map((product) => (
          <button
            key={product.ref}
            onClick={(ev) => handleButtonClicked(ev)}
            id={product.ref.toString()} // Ajoutez l'id du produit
            className="btn btn-outline-primary"
          >
            {product.designation}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductList;
