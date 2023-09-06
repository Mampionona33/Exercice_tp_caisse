import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import PaymentForm from "../components/PaymentForm";
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

export interface IProducCart {
  ref?: number;
  familly?: IProdFamily;
  price?: number;
  quantity?: number;
  designation?: string;
  amount?: number;
}

export interface IModal {
  children: React.ReactNode;
  title: string | null;
  isOpen: boolean;
  submitLabel : string | null;
}

interface GlobalDataContextValue {
  data: IData | null;
  setData: React.Dispatch<React.SetStateAction<IData | null>>;
  filteredProd: IProduct[] | null;
  isProdFiltred: boolean;
  selectedProd: IProduct | null;
  modal: IModal; // Ajout de la propriété modal
  prodInCart: IProducCart[] | null;
  setIsProdFiltred: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltredProd: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  setSelectedProd: React.Dispatch<React.SetStateAction<IProduct | null>>;
  setProdInCart: React.Dispatch<React.SetStateAction<IProducCart[] | null>>;
  // Ajout des méthodes pour gérer le modal
  setModalContent: (content: React.ReactNode) => void;
  setModalTitle: (title: string) => void;
  setModalSubmitLabel: (title: string) => void;
  setModalOpen: (isOpen: boolean) => void;
  setModalClose: () => void;
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
  const [prodInCart, setProdInCart] = useState<IProducCart[] | null>(null);
  const [modal, setModal] = useState<IModal>({
    children: null,
    title: null,
    isOpen: false,
    submitLabel: null,
  });

  // Méthodes pour gérer le modal
  const setModalContent = (content: React.ReactNode) => {
    setModal((prevModal) => ({ ...prevModal, children: content }));
  };

  const setModalTitle = (title: string) => {
    setModal((prevModal) => ({ ...prevModal, title }));
  };

  const setModalSubmitLabel = (submitLabel: string) => {
    setModal((prevModal) => ({ ...prevModal, submitLabel }));
  };

  const setModalOpen = (isOpen: boolean) => {
    setModal((prevModal) => ({ ...prevModal, isOpen }));
  };

  const setModalClose = () => {
    setModal((prevModal) => ({ ...prevModal, isOpen: false }));
  };

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
    <GlobalDataContext.Provider
      value={{
        data,
        setData,
        filteredProd,
        setFiltredProd,
        isProdFiltred,
        setIsProdFiltred,
        selectedProd,
        setSelectedProd,
        prodInCart,
        setProdInCart,
        modal,
        setModalContent,
        setModalTitle,
        setModalOpen,
        setModalClose,
        setModalSubmitLabel
      }}
    >
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
