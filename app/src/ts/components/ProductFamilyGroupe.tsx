import React, { useContext, useEffect, useState } from "react";
import { ProductFamillyContext, IProductFamilly, ProductListContext, IProduct } from "../App";

const ProductFamilyGroupe: React.FC = () => {
  const productFamiliesContext = useContext(ProductFamillyContext);
  const productListContext = useContext(ProductListContext);
  const [selectedFamilyId, setSelectedFamilyId] = useState<number | null>(null);

  const handleClickButton = (idProdFamilly: number) => {
    setSelectedFamilyId(idProdFamilly);
  }

  useEffect(() => {
    if (selectedFamilyId !== null) {
      // Filter products based on the selected family ID
      const filteredProducts: IProduct[] = productListContext.productList.filter((product: IProduct) => product.familly.idProdFamilly === selectedFamilyId);
      productListContext.setProductList(filteredProducts);
    }
  }, [selectedFamilyId, productListContext]);

  return (
    <>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2 flex-wrap">
        {productFamiliesContext.productFamilies.map((family) => (
          <button
            id={family.idProdFamilly.toString()}
            key={family.idProdFamilly}
            className="btn btn-outline-primary"
            onClick={() => handleClickButton(family.idProdFamilly)} // Pass the family ID
          >
            {family.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default ProductFamilyGroupe;
