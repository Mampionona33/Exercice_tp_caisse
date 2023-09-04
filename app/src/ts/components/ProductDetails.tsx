import React from "react";

const ProductDetails: React.FC = () => {
  return (
    <>
      <div className="d-flex p-2 flex-column bg-white">
        <span className="text-capitalize">ref:</span>
        <span className="text-capitalize">désignation:</span>
        <span className="text-capitalize">prix TTC:</span>
      </div>
    </>
  );
};

export default ProductDetails;
