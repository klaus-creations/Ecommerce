import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useTheme = create(
  immer((set) => ({
    isDarkMode: false,
    setTheme: (theme: boolean) =>
      set((state: { isDarkMode: boolean }) => {
        state.isDarkMode = theme;
      }),
  }))
);
