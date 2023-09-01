import React, { useState, ReactNode } from "react";
import IProductFamilly from "./IProductFamilly";
import ProductFamillyContext from "./ProductFamillyContext";

interface ProductFamillyProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductFamillyProviderProps> = ({
  children,
}) => {
  const [productFamilies, setProductFamilies] = useState<IProductFamilly[]>([]);

  return (
    <ProductFamillyContext.Provider
      value={{ productFamilies, setProductFamilies }}
    >
      {children}
    </ProductFamillyContext.Provider>
  );
};

export default ProductProvider;
