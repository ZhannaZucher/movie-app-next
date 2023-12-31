"use client"
import Image from "next/image"
import styles from "../styles/MovieCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import {
  selectMovies,
  useAppDispatch,
  useAppSelector,
} from "@/app/store/selectors"
import {
  addFavoriteId,
  addToMyFavorites,
  removeFromMyFavorites,
} from "@/app/store/favoritesSlice"
import { genreFinder } from "@/utils/genreFinder"

type MovieCard = {
  posterPath?: string | null
  title: string
  id: number
  overview: string
  genreId: number[]
  releaseDate: string
  rating: number
  myFavorite: boolean
}

const MovieCard = ({
  posterPath,
  title,
  id,
  overview,
  genreId,
  releaseDate,
  rating,
  myFavorite,
}: MovieCard) => {
  const [isFavorite, setIsFavorite] = useState(myFavorite)
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)

  const imageSrc = posterPath
    ? `https://image.tmdb.org/t/p/original/${posterPath}`
    : "/poster.jpg"

  const formatedDate = new Date(releaseDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })

  const genres = genreFinder(genreId)

  const toggleFavorite = (id: number) => {
    const favoriteMovie = movies?.find((movie) => movie.id === id)
    if (!isFavorite) {
      dispatch(addFavoriteId(id))
      favoriteMovie && dispatch(addToMyFavorites(favoriteMovie))
      setIsFavorite(true)
    } else {
      dispatch(removeFromMyFavorites(id))
      setIsFavorite(false)
    }
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Image
          src={imageSrc}
          fill={true}
          alt={title}
          sizes="(max-width: 280px) 280px"
          priority={true}
        />
      </div>
      <div className={styles.about}>
        <h2>{title}</h2>
        <h3>Date de sortie : {releaseDate ? formatedDate : "inconnue"}</h3>
        <span>{rating.toFixed(1)} / 10 </span>
        <FontAwesomeIcon icon={faStar} color="#ead91f" fontSize="0.8em" />
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <h4>Synopsis</h4>
        <p>{overview}</p>
      </div>
      <div
        className={styles.favorite}
        onClick={() => toggleFavorite(id)}
        style={{ color: isFavorite ? "#e50914" : "white" }}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </article>
  )
}

export default MovieCard
