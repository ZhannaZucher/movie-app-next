"use client"

import { selectFavoriteMovies, useAppSelector } from "@/app/store/selectors"
import MovieCard from "./MovieCard"

const Favorites = () => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies)
  console.log(favoriteMovies)

  return (
    <section>
      {favoriteMovies?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          posterPath={movie.poster_path}
          id={movie.id}
          overview={movie.overview}
          genreId={movie.genre_ids}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          myFavorite={true}
        />
      ))}
    </section>
  )
}

export default Favorites
