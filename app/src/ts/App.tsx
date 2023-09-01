import React, { createContext, useContext, useEffect, useState } from "react";
import AddToCart from "./components/AddToCart";
import CartTable from "./components/CartTable";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";
import DataLoader from "./db/DataLoader";
import ProductDetails from "./components/ProductDetails";
import { ICart } from "./App";

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

export const GlobalDataContext = createContext<{
  data: { productFamilies: IProductFamilly[]; products: IProduct[] };
  setData: React.Dispatch<
    React.SetStateAction<{
      productFamilies: IProductFamilly[];
      products: IProduct[];
    }>
  >;
}>({ data: { productFamilies: [], products: [] }, setData: () => {} });

export interface ICartItem extends IProduct {
  quantity: number;
  amount: number;
}

export const CartContext = createContext<{
  cart: ICartItem[] | undefined;
  setCart: React.Dispatch<React.SetStateAction<ICartItem[] | undefined>>;
}>({ cart: undefined, setCart: () => {} });

const App: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [productFamilies, setProductFamilies] = useState<IProductFamilly[]>([]);
  const [selectedProd, setSelectedProd] = useState<IProduct | undefined>(
    undefined
  );
  const [cart, setCart] = useState<ICartItem[]>();

  const [globalData, setGlobalData] = useState<{
    productFamilies: IProductFamilly[];
    products: IProduct[];
  }>({ productFamilies: [], products: [] });

  useEffect(() => {
    DataLoader.loadData()
      .then((data) => {
        setGlobalData(data);
        setProductFamilies((prev) => data.productFamilies);
        setProductList(data.products);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON : ", error);
      });
  }, []);

  return (
    <GlobalDataContext.Provider
      value={{ data: globalData, setData: setGlobalData }}
    >
      <ProductFamillyContext.Provider
        value={{ productFamilies, setProductFamilies }}
      >
        <ProductListContext.Provider value={{ productList, setProductList }}>
          <SelectedProdContext.Provider
            value={{ selectedProd, setSelectedProd }}
          >
            <CartContext.Provider value={{ cart, setCart }}>
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
                  <CartTable />
                </div>
              </div>
            </CartContext.Provider>
          </SelectedProdContext.Provider>
        </ProductListContext.Provider>
      </ProductFamillyContext.Provider>
    </GlobalDataContext.Provider>
  );
};

export default App;
