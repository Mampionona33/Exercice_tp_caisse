import React, { createContext, useContext, useEffect, useState } from "react";
import AddToCart from "./components/AddToCart";
import CartTable from "./components/CartTable";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import GlobalDataContextProvider from "./context/GlobalDataContext";
import LabelTotalPrice from "./components/LabelTotalPrice";
import CustomModal from "./components/CustomModal";

const App: React.FC = () => {
  return (
    <GlobalDataContextProvider>
      <div className="container-lg d-flex gap-3 h-100 justify-content-center">
        <div className="col-4 d-flex flex-column gap-2">
          <LabelTotalPrice/>
          <ProductDetails />
          <AddToCart />
          <ProductFamilyGroupe />
          <ProductList />
        </div>
        <div className="col-8">
          <CartTable />
        </div>
        <CustomModal/>
      </div>
    </GlobalDataContextProvider>
  );
};

export default App;
