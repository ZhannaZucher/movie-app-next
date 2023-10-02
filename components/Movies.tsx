"use client"
import { moviesFetch } from "@/app/store/moviesSlice"
import {
  selectFavoriteIds,
  selectMovies,
  selectQuery,
  useAppDispatch,
  useAppSelector,
} from "@/app/store/selectors"
import { useEffect } from "react"
import MovieCard from "./MovieCard"

const Movies = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)
  const search = useAppSelector(selectQuery)
  const favorites = useAppSelector(selectFavoriteIds)

  const checkStatus = (movieId: number) => {
    const isFavorite = favorites.find((id) => id === movieId)
    if (isFavorite !== undefined) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    dispatch(moviesFetch())
  }, [dispatch, search])

  return (
    <section>
      {movies?.slice(0, 12).map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          posterPath={movie.poster_path}
          id={movie.id}
          overview={movie.overview}
          genreId={movie.genre_ids}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          myFavorite={checkStatus(movie.id)}
        />
      ))}
    </section>
  )
}

export default Movies
