import React, { useContext } from "react";
import { ProductFamillyContext, IProductFamilly } from "../App";

const ProductFamilyGroupe: React.FC = () => {
  const productFamilies: IProductFamilly[] = useContext(ProductFamillyContext);

  return (
    <div>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2">
        {productFamilies.map((family) => (
          <button
            key={family.idProdFamilly}
            className="btn btn-outline-primary"
          >
            {family.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductFamilyGroupe;
