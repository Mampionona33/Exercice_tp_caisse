import { createContext } from "react";
import IProduct from "./IProduct";

const ProductContext = createContext<{
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}>({ productList: [], setProductList: () => {} });

export default ProductContext;
