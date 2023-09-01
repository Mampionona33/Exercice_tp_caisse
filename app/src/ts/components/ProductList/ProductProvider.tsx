import React, { useState, ReactNode } from "react";
import IProduct from "./IProduct";
import ProductContext from "./ProductContext";

interface ProductFamillyProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductFamillyProviderProps> = ({
  children,
}) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
