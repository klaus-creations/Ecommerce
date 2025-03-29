import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage } from "zustand/middleware";

interface ThemeState {
  isDarkMode: boolean;
  setTheme: (theme: boolean) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    immer((set) => ({
      isDarkMode: false, // Default theme mode
      setTheme: (theme: boolean) =>
        set((state) => {
          state.isDarkMode = theme;
        }),
    })),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
