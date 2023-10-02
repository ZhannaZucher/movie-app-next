"use client"

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type Data = {
  results: Movie[]
}

type MoviesState = {
  data: Data | null
  loading: boolean
  error: null | string
  searchQuery: string | null
}

const initialState: MoviesState = {
  data: null,
  loading: false,
  error: null,
  searchQuery: null,
}

export const moviesFetch = createAsyncThunk<
  any,
  undefined,
  { state: { movies: MoviesState } }
>("movies/moviesFetch", async (_, { getState }) => {
  const getQuery = getState().movies.searchQuery
  const query = getQuery ? getQuery : "code"
  const keyAPI = process.env.NEXT_PUBLIC_API_KEY as string
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&query=${query}&language=fr-FR`
    )
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    throw new Error("Unable to fetch movies")
  }
})

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    sortByTop(state) {
      if (state.data)
        state.data.results = state.data.results.sort(
          (a, b) => b.vote_average - a.vote_average
        )
    },
    sortByFlop(state) {
      if (state.data)
        state.data.results = state.data.results.sort(
          (a, b) => a.vote_average - b.vote_average
        )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(moviesFetch.pending, (state) => {
        state.loading = true
      })
      .addCase(moviesFetch.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(moviesFetch.rejected, (state) => {
        state.error = "rejected"
        state.loading = false
      })
  },
})

export const { setSearchQuery, sortByTop, sortByFlop } = moviesSlice.actions
export default moviesSlice.reducer
