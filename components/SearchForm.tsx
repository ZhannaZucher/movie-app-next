"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/SearchForm.module.scss"

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" />
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
