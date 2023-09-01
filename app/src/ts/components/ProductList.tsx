import React, { useContext, useEffect, useState } from "react";
import { IProduct, ProductListContext, SelectedProdContext } from "../App";

const ProductList: React.FC = () => {
  const productListContext = useContext(ProductListContext);
  const selectedProdContext = useContext(SelectedProdContext);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleButtonClicked = (productId: number) => {
    setSelectedProductId(productId);
  };

  useEffect(() => {
    if (selectedProductId !== null) {
      const selectedProduct: IProduct | undefined =
        productListContext.productList.find(
          (product: IProduct) => product.ref === selectedProductId
        );

      if (selectedProduct) {
        selectedProdContext.setSelectedProd(selectedProduct);
      }
    }
  }, [selectedProductId, productListContext]);

  return (
    <>
      <div>Liste des produits</div>
      <div className="d-flex gap-2 flex-wrap">
        {productListContext.productList.map((product) => (
          <button
            key={product.ref}
            onClick={() => handleButtonClicked(product.ref)} // Pass the product ID
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
