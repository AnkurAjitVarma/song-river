import Logo from "./Logo.tsx"
import styles from "../styles/Header.module.css"
import type { JSX } from "react";
import SearchBar from "./SearchBar.tsx";

const Header = (): JSX.Element => {
    return <header className={styles.Header}>
        <Logo fontSize='3rem' />
        <h1 className={styles.Heading}>Employee Directory</h1>
        <SearchBar />
    </header>
}

export default Header;