import React, { useEffect, useState } from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const ProductFamilyGroupe: React.FC = () => {
  const { data,setData,setFiltredProd,setIsProdFiltred } = useGlobalData();
  const [buttonId, setButtonId] = useState<number | null>(null);

  const handleClickButton = (idProdFamily: number) => {
    setButtonId(idProdFamily);
  };

  useEffect(() => {
    let mounted: boolean = true;
    if (buttonId) {
      if (mounted) {
        if(data && data.products ){
          const filteredProd = data.products.filter((prod)=>prod.familly.idProdFamily ===  buttonId)
         setFiltredProd(filteredProd);
         setIsProdFiltred(true);
        }
      }
    }

    return function cleanup() {
      mounted = false;
    };
  }, [buttonId, setData, data, ]);

  return (
    <>
      <div>Liste des familles de produits :</div>
      <div className="d-flex gap-2 flex-wrap">
        {data?.productFamilies.map((family, key) => (
          <button
            id={"prod_familly_".concat(family.idProdFamily?.toString())}
            key={key}
            className="btn btn-outline-primary"
            onClick={() => handleClickButton(family.idProdFamily)}
          >
            {family.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductFamilyGroupe;
