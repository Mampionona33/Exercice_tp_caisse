import React, { useContext, useEffect, useState } from "react";

const ProductList: React.FC = () => {
  return (
    <>
      <div>Liste des produits</div>
      <div className="d-flex gap-2 flex-wrap">
        {/* {productListContext.productList.map((product) => (
          <button
            key={product.ref}
            onClick={() => handleButtonClicked(product.ref)} // Pass the product ID
            className="btn btn-outline-primary"
          >
            {product.designation}
          </button>
        ))} */}
      </div>
    </>
  );
};

export default ProductList;
