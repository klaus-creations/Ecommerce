import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface searchState {
  globalSearchValue: string;
  setGlobalSearch: (value: string) => void;
}

export const useSearch = create<searchState>()(
  immer((set) => ({
    globalSearchValue: "", // Default theme mode
    setGlobalSearch: (value: string) =>
      set((state) => {
        state.globalSearchValue = value;
      }),
  }))
);
