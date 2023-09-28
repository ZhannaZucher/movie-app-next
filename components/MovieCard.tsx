"use client"
import Image from "next/image"
import styles from "../styles/MovieCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useAppDispatch } from "@/app/store/selectors"
import { addToFavorites, removeFromFavorites } from "@/app/store/favoritesSlice"

type MovieCard = {
  posterPath?: string | null
  title: string
  id: number
  overview: string
  genreId: number[]
  releaseDate: string
  rating: number
}

const MovieCard = ({
  posterPath,
  title,
  id,
  overview,
  genreId,
  releaseDate,
  rating,
}: MovieCard) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useAppDispatch()

  const imageSrc = posterPath
    ? `https://image.tmdb.org/t/p/original/${posterPath}`
    : "/poster.jpg"

  const formatedDate = new Date(releaseDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })

  const toggleFavorite = (id: number) => {
    if (!isFavorite) {
      dispatch(addToFavorites(id))
    } else {
      dispatch(removeFromFavorites(id))
    }
    setIsFavorite(!isFavorite)
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
        <h3 className="about__release">Sorti le : {formatedDate}</h3>
        <span>{rating.toFixed(1)} / 10 </span>
        <FontAwesomeIcon icon={faStar} color="#ead91f" fontSize="0.8em" />
        <ul className="genre">
          <li>Action</li>
          <li>Drame</li>
          <li>Romance</li>
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
