import React from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const ProductDetails: React.FC = () => {
    const { selectedProd} = useGlobalData();


  return (
    <>
      <div className="d-flex p-2 flex-column bg-white">
        <span className="text-capitalize">ref: {selectedProd?.ref}</span>
        <span className="text-capitalize">désignation: {selectedProd?.designation}</span>
        <span className="text-capitalize">prix TTC: {selectedProd?.price}</span>
      </div>
    </>
  );
};

export default ProductDetails;
