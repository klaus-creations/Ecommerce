
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface PaginationState {
  search: string;
  page: number;
  limit: number;
  total: number;
  sortBy: string;
  sortOrder: "asc" | "desc";

  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setLimit: (value: number) => void;
  setSort: (sortBy: string, sortOrder: "asc" | "desc") => void;
  setTotal: (value: number) => void;
}

export const usePagination = create<PaginationState>()(
  immer((set) => ({
    search: "",
    page: 1,
    limit: 10,
    total: 0,
    sortBy: "createdAt",
    sortOrder: "desc",

    setSearch: (value) => set((state) => { state.search = value }),
    setPage: (value) => set((state) => { state.page = value }),
    setLimit: (value) => set((state) => { state.limit = value }),
    setSort: (sortBy, sortOrder) => set((state) => {
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
    }),
    setTotal: (value) => set((state) => { state.total = value }),
  }))
);
