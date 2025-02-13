import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeInterface {
  isDarkMode: boolean;
}

const storedTheme = localStorage.getItem("theme");
const initialState: ThemeInterface = {
  isDarkMode: storedTheme ? JSON.parse(storedTheme) : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
