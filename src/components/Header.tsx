import Logo from "./Logo.tsx"
import styles from "../styles/Header.module.css"
import type { JSX } from "react";
import SearchBar from "./SearchBar.tsx";
import {Link} from "@tanstack/react-router";

const Header = (): JSX.Element => {
    return <header className={styles.Header}>
        <Logo fontSize='3rem' />
        <Link to="/" search={{q: ""}} className={styles.Link}>
            <h1 className={styles.Heading}>Employee Directory</h1>
        </Link>
        <SearchBar />
    </header>
}

export default Header;