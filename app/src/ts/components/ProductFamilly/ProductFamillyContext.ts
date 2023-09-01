import { createContext } from "react";
import IProductFamilly from "./IProductFamilly";

export const ProductFamillyContext = createContext<{
  productFamilies: IProductFamilly[];
  setProductFamilies: React.Dispatch<React.SetStateAction<IProductFamilly[]>>;
}>({ productFamilies: [], setProductFamilies: () => {} });

export default ProductFamillyContext;
