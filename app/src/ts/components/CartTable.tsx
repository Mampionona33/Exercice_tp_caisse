import React from "react";
import { useGlobalData } from "../context/GlobalDataContext";

const CartTable: React.FC = () => {
  const {prodInCart} = useGlobalData();

  const createBody =()=>{
    return prodInCart?.map((pro)=>{
      return(
        <tr>
          <th>{pro.ref}</th>
          <th>{pro.designation}</th>
          <th>{pro.price}</th>
          <th>{pro.quantity}</th>
          <th>{pro.amount}</th>
          <th><button className="btn btn-danger">supprimer</button></th>
        </tr>
      )
    })
  }

  return (
    <table className="table ">
      <thead className="table-dark">
        <tr>
          <th className="text-capitalize align-top">article</th>
          <th className="text-capitalize align-top">designation</th>
          <th className="text-capitalize align-top">prix HT</th>
          <th className="text-capitalize align-top">quantité</th>
          <th className="text-capitalize align-top">montant</th>
          <th className="text-capitalize align-top">Action</th>
        </tr>
      </thead>
      <tbody>
        {createBody()}
      </tbody>
    </table>
  );
};

export default CartTable;
