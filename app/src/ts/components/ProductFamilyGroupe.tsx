import React, { useContext, useEffect, useState } from "react";
import { ProductFamillyContext, IProductFamilly, ProductListContext, IProduct } from "../App";
import DataLoader from "../db/DataLoader";

const ProductFamilyGroupe: React.FC = () => {
  const productFamiliesContext = useContext(ProductFamillyContext);
  const productListContext = useContext(ProductListContext);
  const [buttonId, setButtonId] = useState<number | null>(null);

  const handleClickButton = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const idProdFamilly = parseInt(ev.currentTarget.id);
    setButtonId(idProdFamilly);
  }

  useEffect(() => {
    if (buttonId !== null) {
      (async () => {
        try {
          const data = await DataLoader.loadData();
          productFamiliesContext.setProductFamilies(data.productFamilies);
          const filteredProducts: IProduct[] = data.products.filter((product: IProduct) => product.familly.idProdFamilly === buttonId);
          productListContext.setProductList(filteredProducts);
        } catch (error) {
          console.error("Erreur lors du chargement des données JSON : ", error);
        }
      })();
    }
  }, [buttonId, productFamiliesContext, productListContext]);

  return (
    <>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2 flex-wrap">
        {productFamiliesContext.productFamilies.map((family) => (
          <button
            id={family.idProdFamilly.toString()}
            key={family.idProdFamilly}
            className="btn btn-outline-primary"
            onClick={(e) => handleClickButton(e)}
          >
            {family.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default ProductFamilyGroupe;
