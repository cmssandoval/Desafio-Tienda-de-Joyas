import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { Joya } from "./types";

interface JoyasContextType {
  joyas: Joya[];
  loading: boolean;
  error: string | null;
  previous: string | null;
  next: string | null;
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
  getJoyas: (
    page: number,
    order: string,
    limits: number ) => Promise<void>;
};

const JoyasContext = createContext<JoyasContextType | undefined>(undefined);

export const JoyasProvider = ({ children }: { children: ReactNode }) => {

  const backendURL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT}`;

  const [joyas, setJoyas] = useState<Joya[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [order, setOrder] = useState<string>('id_asc');


  const getJoyas = async (
    page: number = 1,
    order: string = 'id_asc',
    limits: number = 5,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${backendURL}/joyas?page=${page}&order=${order}&limit=${limits}`
      );

      const {
        results,
        total_pages,
        next,
        previous
      } = await response.json();

      setJoyas(results);
      setTotalPages(total_pages);
      setNext(next);
      setPrevious(previous);

    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  // interface JoyasFilters {

  // };

  // const getJoyasFiltered = async () => {
    
  // };

  useEffect(() => {
    getJoyas(page, order);
  }, [page, order]);

  return (
    <JoyasContext.Provider value={{
        joyas,
        getJoyas,
        loading,
        error,
        previous,
        next,
        totalPages,
        page,
        setPage,
        order,
        setOrder,
      }}>
      { children }
    </JoyasContext.Provider>
  )
};

export const useJoyasApi = () => {
  const context = useContext(JoyasContext);
  if (!context) throw new Error('useJoyasApi debe usarse dentro de JoyasProvider');
  return context;
};