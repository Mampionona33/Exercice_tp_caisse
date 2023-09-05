import React from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const ProductList: React.FC = () => {
  const { data,isProdFiltred,filteredProd} = useGlobalData();

  const handleClickButton = (idProdFamily: number) => {
    console.log(`Button with ID ${idProdFamily} clicked.`);
  };

  return (
    <>
      <div>Liste des produits</div>
      <div className="d-flex gap-2 flex-wrap">

        { !isProdFiltred ? data?.products.map((product, key) => (
          <button
            id={"product_".concat(product.ref.toString())}
            key={key}
            onClick={() => handleClickButton(product.ref)}
            className="btn btn-outline-primary"
          >
            {product.designation}
          </button>
        )) : filteredProd?.map((product, key) => (
          <button
            id={"product_".concat(product.ref.toString())}
            key={key}
            onClick={() => handleClickButton(product.ref)}
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
