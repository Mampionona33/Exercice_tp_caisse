import React, { createContext, useContext, useEffect, useState } from "react";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";
import DataLoader from "./db/DataLoader";
import ProductDetails from "./components/ProductDetails"

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

export const ProductFamillyContext = createContext<{
  productFamilies: IProductFamilly[];
  setProductFamilies: React.Dispatch<React.SetStateAction<IProductFamilly[]>>;
}>({ productFamilies: [], setProductFamilies: () => {} });

export const ProductListContext = createContext<{
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}>({ productList: [], setProductList: () => {} });

export const SelectedProdContext = createContext<{
  selectedProd: IProduct | undefined;
  setSelectedProd: React.Dispatch<React.SetStateAction<IProduct | undefined>>;
}>({ selectedProd: undefined, setSelectedProd: () => {} });

const App: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [productFamilies, setProductFamilies] = useState<IProductFamilly[]>([]);
  const [selectedProd, setSelectedProd] = useState<IProduct | undefined>(undefined);

  useEffect(() => {
    DataLoader.loadData()
      .then((data) => {
        setProductFamilies(data.productFamilies);
        setProductList(data.products);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON : ", error);
      });
  }, [productFamilies,productList]);

  return (
    <ProductFamillyContext.Provider value={{ productFamilies, setProductFamilies }}>
      <ProductListContext.Provider value={{ productList, setProductList }}>
        <SelectedProdContext.Provider value={{ selectedProd, setSelectedProd }}>
          <div className="container-lg d-flex gap-3 h-100 justify-content-center">
            <div className="col-4 d-flex flex-column gap-2">
              <div className="bg-success d-flex justify-content-center">
                <h2 className="text-white">Net à payer : 1000€</h2>
              </div>
              <ProductDetails />
              <AddToCart />
              <ProductFamilyGroupe />
              <ProductList />
            </div>
            <div className="col-8">
              <Cart />
            </div>
          </div>
        </SelectedProdContext.Provider>
      </ProductListContext.Provider>
    </ProductFamillyContext.Provider>
  );
};

export default App;
