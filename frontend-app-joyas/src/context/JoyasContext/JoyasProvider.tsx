import { useCallback, useEffect, useState, type ReactNode } from 'react';
import type { ContextApiData, ContextApiFilters, Pagination } from './JoyasContextTypes.ts';
import JoyasContext from './JoyasContext.ts';

const backendURL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT}`;

const JoyasProvider = ({ children }: { children: ReactNode }) => {

  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ]     = useState<unknown | null>(null);

  const [ apiPagination, setApiPagination ] = useState<Pagination>({
    page: 1,
    order: 'id_asc',
    limits: 4,
  })

  const [ apiData, setApiData ]   = useState<ContextApiData>({
    joyas: [],
    totalPages: 1,
    previous: null,
    next: null
  });

  const [ apiFilters, setApiFilters ] = useState<ContextApiFilters>({
    nombre: '',
  });

  const getJoyas = useCallback( async ( signal?: AbortSignal ) => {
    setLoading(true)
    setError(null);

    try {
      const response = await fetch(
        `${backendURL}/joyas?page=${apiPagination.page}&order_by=${apiPagination.order}&limits=${apiPagination.limits}`,
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

  const getJoyasFiltered = useCallback( async ( signal?: AbortSignal ) => {
    
    setLoading(true);
    setError(null);

    try {
       const response = await fetch(
        `${backendURL}/joyas/filtros?nombre=${apiFilters.nombre}`,
        { signal }
      );

      const results = await response.json();

      //* Static pagination data until abstraction of HATEOAS and pagination in backend.
      setApiData({
        joyas: results,
        totalPages: 1,
        previous: null,
        next: null,
      });

    } catch (error: unknown) {

      if ((error as Error).name !== 'AbortError') {
        setError(error);
        console.error(error);
      }
     
    } finally {

      setLoading(false);
      
    }
  }, [apiFilters]);

  useEffect(() => {
    const controller = new AbortController();

    const hasFilter = apiFilters.nombre?.trim().length > 0;

    const asyncRenderTimeOut = setTimeout(() => {

      if ( hasFilter ) {
        getJoyasFiltered(controller.signal);
      } else {
        getJoyas(controller.signal);
      }

    }, 100);

    return () => {
      controller.abort();
      clearTimeout(asyncRenderTimeOut);
    };
  }, [ apiFilters.nombre, getJoyas, getJoyasFiltered ]);

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
        setApiFilters,
      }}>
      { children }
    </JoyasContext.Provider>
  )
};

export default JoyasProvider;