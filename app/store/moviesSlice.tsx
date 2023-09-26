"use client"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

type Movie = {
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
}

const initialState: MoviesState = {
  data: null,
  loading: false,
  error: null,
}

export const moviesFetch = createAsyncThunk("movies/moviesFetch", async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=122d4d2dbb2458a2b88ec329b2f916a6&query=code&language=fr-FR"
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
  reducers: {},
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

export default moviesSlice.reducer
