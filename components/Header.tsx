import Navigation from "./Navigation"
import styles from "../styles/Header.module.scss"
import Link from "next/link"

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Favoris", href: "/favorites" },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
      <Link href="/">
        <h1>Movies App</h1>
      </Link>
    </header>
  )
}

export default Header
