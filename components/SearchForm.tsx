"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/SearchForm.module.scss"
import { setSearchQuery } from "@/app/store/moviesSlice"
import { useState } from "react"
import { useAppDispatch } from "@/app/store/selectors"

const SearchForm = () => {
  const [query, setQuery] = useState("")
  const dispatch = useAppDispatch()
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(setSearchQuery(query))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrez le titre"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
      <div>
        <button>
          Top <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button>
          Flop <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
