import IProductFamilly from "../ProductFamilly/IProductFamilly";

export default interface IProduct {
  ref: number;
  familly: IProductFamilly;
  price: number;
  designation: string;
}
