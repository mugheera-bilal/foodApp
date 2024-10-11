import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface favoriteSlice {
  ids: number[];
}

const initialState: favoriteSlice = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{id: number}>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{id: number}>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
 
export default favoriteSlice.reducer;
