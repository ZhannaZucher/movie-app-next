"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/SearchForm.module.scss"
import { setSearchQuery, sortByTop, sortByFlop } from "@/app/store/moviesSlice"
import { useState } from "react"
import { useAppDispatch } from "@/app/store/selectors"

const SearchForm = () => {
  const [query, setQuery] = useState("")
  const dispatch = useAppDispatch()
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(setSearchQuery(query))
  }

  const displayByTop = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(sortByTop())
  }

  const displayByFlop = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(sortByFlop())
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Entrez le titre"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Rechercher
      </button>
      <div>
        <button onClick={(e) => displayByTop(e)}>
          Top <FontAwesomeIcon icon={faArrowUp} fontSize="1em" />
        </button>
        <button onClick={(e) => displayByFlop(e)}>
          Flop <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
