import React, { createContext, useContext } from "react";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";

export interface IProductFamilly {
  idProdFamilly: number;
  name: string;
}

export interface IProduct {
  ref: number;
  familly: IProductFamilly;
  price: number;
  brand: string;
}

// Création des contextes
export const ProductFamillyContext = createContext<IProductFamilly[]>([]); 
export const ProductListContext = createContext<IProduct[]>([]);

const App: React.FC = () => {
  const productFamilies: IProductFamilly[] = [
    { idProdFamilly: 0, name: "biscuit" },
    { idProdFamilly: 1, name: "savon" },
    { idProdFamilly: 2, name: "déodorant" },
    { idProdFamilly: 3, name: "huile" },
  ];

  const productList: IProduct[] = [
    {
      ref: 0,
      familly: {
        idProdFamilly: 0,
        name: "biscuit",
      },
      brand: "Bolo",
      price: 200,
    },
  ];


  return (
    <div className="container-lg d-flex gap-3 h-100 justify-content-center">
      <div className="col-4 d-flex flex-column gap-2">
        <div className="bg-success d-flex justify-content-center" >
          <h2 className="text-white"  >Net à payer: 1000€</h2>
        </div>
        <div className="d-flex p-2 flex-column bg-white">
          <span>Ref: 4528754f</span>
          <span>designation: bolo</span>
        </div>
        <AddToCart />
        <ProductFamillyContext.Provider value={productFamilies}>
          <ProductFamilyGroupe />
        </ProductFamillyContext.Provider>
        <ProductListContext.Provider value={productList}>
          <ProductList />
        </ProductListContext.Provider>
      </div>
      <div className="col-8">
        <Cart />
      </div>
    </div>
  );
};

export default App;
