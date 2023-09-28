"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type MovieId = number | string
type FavoritesState = {
  list: MovieId[]
}

const initialState: FavoritesState = {
  list: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<number>) {
      state.list.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.list = state.list.filter((movieId) => movieId !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
