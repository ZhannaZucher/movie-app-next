"use client"
import type { Movie } from "@/app/store/moviesSlice"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { selectFavoriteMovies, useAppSelector } from "./selectors"

type MovieId = number | string
type FavoritesState = {
  idsList: MovieId[]
  favoriteMovies: Movie[]
}

const initialState: FavoritesState = {
  idsList: [],
  favoriteMovies: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteId(state, action: PayloadAction<number>) {
      if (state.idsList.includes(action.payload)) {
        return
      } else {
        state.idsList.push(action.payload)
      }
    },
    addToMyFavorites(state, action: PayloadAction<Movie>) {
      if (state.favoriteMovies.includes(action.payload)) {
        return
      } else {
        state.favoriteMovies.push(action.payload)
      }
    },
    removeFromMyFavorites(state, action: PayloadAction<number>) {
      state.idsList = state.idsList.filter(
        (movieId) => movieId !== action.payload
      )
      state.favoriteMovies = state.favoriteMovies.filter(
        (favorite) => favorite.id !== action.payload
      )
    },
  },
})

export const { addFavoriteId, addToMyFavorites, removeFromMyFavorites } =
  favoritesSlice.actions
export default favoritesSlice.reducer
