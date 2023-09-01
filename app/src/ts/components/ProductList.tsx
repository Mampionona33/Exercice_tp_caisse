import React, { useContext } from "react";
import { IProduct, ProductListContext } from "../App";


const ProductList:React.FC = ()=>{
    const {productList}= useContext(ProductListContext);

    return (
        <>
            <div>
                List des produits
            </div>
            <div className="d-flex gap-2 flex-wrap">
                {productList.map((product)=>(
                    <button 
                    key={product.ref}  
                    className="btn btn-outline-primary">
                        {product.designation}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ProductList;