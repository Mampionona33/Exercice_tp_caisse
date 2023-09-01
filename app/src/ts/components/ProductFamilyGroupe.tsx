import React, { useContext, useEffect, useState } from "react";
import {
  ProductFamillyContext,
  IProductFamilly,
  ProductListContext,
  IProduct,
  GlobalDataContext,
} from "../App";
import DataLoader from "../db/DataLoader";

const ProductFamilyGroupe: React.FC = () => {
  const productFamiliesContext = useContext(ProductFamillyContext);
  const productListContext = useContext(ProductListContext);
  const globalData = useContext(GlobalDataContext);
  const [buttonId, setButtonId] = useState<number | null>(null);

  const handleClickButton = (idProdFamilly: number) => {
    setButtonId(idProdFamilly);
  };

  useEffect(() => {
    if (buttonId) {
      const filtredProd = globalData.data.products.filter(
        (product: IProduct) => product.familly.idProdFamilly === buttonId
      );
      console.log(filtredProd);
      productListContext.setProductList(filtredProd);
    }
  }, [buttonId]);

  return (
    <>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2 flex-wrap">
        {productFamiliesContext.productFamilies.map((family) => (
          <button
            id={family.idProdFamilly.toString()}
            key={family.idProdFamilly}
            className="btn btn-outline-primary"
            onClick={() => handleClickButton(family.idProdFamilly)}
          >
            {family.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductFamilyGroupe;
