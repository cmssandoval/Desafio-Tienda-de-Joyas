import type { Dispatch, SetStateAction } from "react";

export interface Joya {
  id: number;
  nombre: string;
  categoria: string;
  metal: string;
  precio: number;
  stock: number;
  href: string;
};

export interface ContextApiData {
  joyas: Joya[];
  totalPages: number;
  previous: string | null;
  next: string | null;
};

export interface Pagination {
  page: number;
  order: string;
  limits: number;
};

export interface ApiResponse {
  joyas: Joya[];
  loading: boolean;
  error: unknown | null;
  previous: string | null;
  next: string | null;
  totalPages: number;
  apiPagination: Pagination;
  setApiPagination: Dispatch<SetStateAction<Pagination>>;
};