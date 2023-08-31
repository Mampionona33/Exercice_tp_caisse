import React from "react";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import ProductFamilyGroupe from "./components/ProductFamilyGroupe";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <>
      <div className="container-lg d-flex gap-3">
        <div className="col-8">
          <Cart />
        </div>
        <div className="col-4 d-flex flex-column">
          <h2>Net à payer:</h2>
          <AddToCart/>
          <ProductFamilyGroupe />
          <ProductList />
        </div>
      </div>
    </>
  );
};
export default App;
