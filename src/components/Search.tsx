import type { JSX } from "react";
import styles from "../styles/Search.module.css"

const Search = (): JSX.Element => {
    return <div className={styles.Search}>
        <input type="search" />
        <button type="button">Clear</button>
    </div>
}

export default Search