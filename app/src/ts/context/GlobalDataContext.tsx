import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import DataLoader from "../db/DataLoader";

export interface IProdFamily {
  idProdFamily: number;
  name: string;
}

export interface IProduct {
  ref: number;
  familly: IProdFamily;
  price: number;
  quantity: number;
  designation: string;
}

export interface IData {
  productFamilies: IProdFamily[];
  products: IProduct[];
}

interface GlobalDataContextValue {
  data: IData | null;
  setData: React.Dispatch<React.SetStateAction<IData | null>>;
  filteredProd : IProduct[] | null;
  isProdFiltred : boolean;
  selectedProd : IProduct | null;
  prodInCart : IProduct[] | null;
  setIsProdFiltred :React.Dispatch<React.SetStateAction<boolean>>;
  setFiltredProd : React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  setSelectedProd : React.Dispatch<React.SetStateAction<IProduct | null>>;
  setProdInCart : React.Dispatch<React.SetStateAction<IProduct[] | null>>;
}

export const GlobalDataContext = createContext<
  GlobalDataContextValue | undefined
>(undefined);

interface GlobalDataContextProviderProps {
  children: ReactNode;
}

const GlobalDataContextProvider: React.FC<GlobalDataContextProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<IData | null>(null);
  const [filteredProd, setFiltredProd] = useState<IProduct[] | null>(null);
  const [isProdFiltred, setIsProdFiltred] = useState<boolean>(false);
  const [selectedProd, setSelectedProd] = useState<IProduct | null>(null);
  const [prodInCart,setProdInCart] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadedData = await DataLoader.loadData();
        setData(loadedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <GlobalDataContext.Provider value={{ 
      data, setData, filteredProd,setFiltredProd,
      isProdFiltred, setIsProdFiltred,
      selectedProd, setSelectedProd ,
      prodInCart,setProdInCart}}>
        {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalData must be used within a GlobalDataContextProvider"
    );
  }
  return context;
};

export default GlobalDataContextProvider;
