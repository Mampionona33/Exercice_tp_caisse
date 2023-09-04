import React, { useEffect, useState } from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const ProductFamilyGroupe: React.FC = () => {
  const { data } = useGlobalData();
  const [buttonId, setButtonId] = useState<number | null>(null);

  const handleClickButton = (idProdFamily: number) => {
    setButtonId(idProdFamily);
  };

  useEffect(() => {
    let mounted: boolean = true;
    if (buttonId) {
      if (mounted) {
        console.log(buttonId);
      }
    }

    return function cleanup() {
      mounted = false;
    };
  }, [buttonId]);

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
