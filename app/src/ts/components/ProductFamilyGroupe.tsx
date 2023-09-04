import React, { useContext, useEffect, useState } from "react";

const ProductFamilyGroupe: React.FC = () => {
  
  return (
    <>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2 flex-wrap">
        {/* {productFamiliesContext.productFamilies.map((family) => (
          <button
            id={family.idProdFamilly.toString()}
            key={family.idProdFamilly}
            className="btn btn-outline-primary"
            onClick={() => handleClickButton(family.idProdFamilly)}
          >
            {family.name}
          </button>
        ))} */}
      </div>
    </>
  );
};

export default ProductFamilyGroupe;
