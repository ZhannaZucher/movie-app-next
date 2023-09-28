"use client"
import { moviesFetch } from "@/app/store/moviesSlice"
import {
  selectMovies,
  useAppDispatch,
  useAppSelector,
} from "@/app/store/selectors"
import { useEffect } from "react"
import MovieCard from "./MovieCard"

const Movies = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)
  console.log(movies)

  useEffect(() => {
    dispatch(moviesFetch())
  }, [dispatch])

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
        />
      ))}
    </section>
  )
}

export default Movies
