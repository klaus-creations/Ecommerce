import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeInterface {
  isDarkMode: boolean;
}

const initialState: ThemeInterface = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
