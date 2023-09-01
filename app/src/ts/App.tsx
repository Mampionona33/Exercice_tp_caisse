import React, { createContext, useContext, useEffect, useState } from "react";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";
import DataLoader from "./db/DataLoader"; // Assurez-vous de spécifier le bon chemin d'accès

export interface IProductFamilly {
  idProdFamilly: number;
  name: string;
}

export interface IProduct {
  ref: number;
  familly: IProductFamilly;
  price: number;
  designation: string;
}

// Création des contextes
export const ProductFamillyContext = createContext<{
  productFamilies: IProductFamilly[];
  setProductFamilies: React.Dispatch<React.SetStateAction<IProductFamilly[]>>;
}>({ productFamilies: [], setProductFamilies: () => {} });

export const ProductListContext = createContext<{
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}>({ productList: [], setProductList: () => {} });

const App: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [productFamilies, setProductFamilies] = useState<IProductFamilly[]>([]);

  useEffect(() => {
    // Utilisez DataLoader pour charger les données depuis data.json
    DataLoader.loadData()
      .then((data) => {
        console.log(data);
        setProductFamilies(data.productFamilies);
        setProductList(data.products);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON : ", error);
      });
  }, []);

  return (
    <ProductFamillyContext.Provider value={{ productFamilies, setProductFamilies }}>
      <ProductListContext.Provider value={{ productList, setProductList }}>
        <div className="container-lg d-flex gap-3 h-100 justify-content-center">
          <div className="col-4 d-flex flex-column gap-2">
            <div className="bg-success d-flex justify-content-center">
              <h2 className="text-white">Net à payer: 1000€</h2>
            </div>
            <div className="d-flex p-2 flex-column bg-white">
              <span>Ref: 4528754f</span>
              <span>designation: bolo</span>
            </div>
            <AddToCart />
            <ProductFamilyGroupe />
            <ProductList />
          </div>
          <div className="col-8">
            <Cart />
          </div>
        </div>
      </ProductListContext.Provider>
    </ProductFamillyContext.Provider>
  );
};

export default App;
