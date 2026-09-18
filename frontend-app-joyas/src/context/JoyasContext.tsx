import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { ContextApiData, ApiResponse, Pagination } from "./types";

const backendURL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT}`;

const JoyasContext = createContext<ApiResponse | undefined>(undefined);

export const JoyasProvider = ({ children }: { children: ReactNode }) => {

  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ]     = useState<unknown | null>(null);

  const [ apiPagination, setApiPagination ] = useState<Pagination>({
    page: 1,
    order: 'id_asc',
    limits: 5,
  })

  const [ apiData, setApiData ]   = useState<ContextApiData>({
    joyas: [],
    totalPages: 1,
    previous: null,
    next: null
  });

  const getJoyas = useCallback(async ( signal?: AbortSignal) => {

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${backendURL}/joyas?page=${apiPagination.page}&order=${apiPagination.order}&limit=${apiPagination.limits}`,
        { signal }
      );

      const {
        results,
        total_pages,
        next,
        previous
      } = await response.json();

      setApiData({
        joyas: results,
        totalPages: total_pages,
        next,
        previous
      })

    } catch (error: unknown) {

      if ((error as Error).name !== 'AbortError') {
        setError(error);
        console.error(error);
      }

    } finally {

      setLoading(false);
    }
  }, [apiPagination]);

  // interface JoyasFilters {

  // };

  // const getJoyasFiltered = async () => {
    
  // };

  useEffect(() => {
    const controller = new AbortController();

    const asyncRenderTimeOut = setTimeout(() => {
      getJoyas(controller.signal);

    }, 0);

    return () => {
      controller.abort();
      clearTimeout(asyncRenderTimeOut);
    };
  }, [getJoyas]);

  return (
    <JoyasContext.Provider value={{
        joyas: apiData.joyas,
        loading,
        error,
        previous: apiData.previous,
        next: apiData.next,
        totalPages: apiData.totalPages,
        apiPagination,
        setApiPagination,
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