"use client"

import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./moviesSlice"
import favoritesReducer from "./favoritesSlice"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
