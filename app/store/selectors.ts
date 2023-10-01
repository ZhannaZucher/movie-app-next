import type { RootState, AppDispatch } from "./store"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"

//typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const selectMovies = (state: RootState) => state.movies.data?.results
export const selectQuery = (state: RootState) => state.movies.searchQuery
export const selectFavoriteIds = (state: RootState) => state.favorites.idsList
export const selectFavoriteMovies = (state: RootState) =>
  state.favorites.favoriteMovies
