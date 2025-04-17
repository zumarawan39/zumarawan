import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current_language: {
    id: 'en',
    name: 'English',
    short: 'ENG',
    iconPath: '/assets/flags/gb.svg',
  },
};

const localSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.current_language = action.payload;
    },
  },
});

export const { setLocale } = localSlice.actions;
export default localSlice.reducer;
