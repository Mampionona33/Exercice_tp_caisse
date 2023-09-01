import React from "react";
import { SelectedProdContext } from "../App";

const ProductDetails: React.FC = () => {
  const selectedProdContext = React.useContext(SelectedProdContext);

  return (
    <>
      <div className="d-flex p-2 flex-column bg-white">
        <span className="text-capitalize">
          ref: {selectedProdContext.selectedProd?.ref}
        </span>
        <span className="text-capitalize">
          désignation: {selectedProdContext.selectedProd?.designation}
        </span>
        <span className="text-capitalize">
          prix TTC: {selectedProdContext.selectedProd?.price}
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
