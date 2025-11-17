import type { JSX } from "react";
import styles from "../styles/Search.module.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClear } from "react-icons/md";

const Search = (): JSX.Element => {
    return <div className={styles.Search}>
        <span className={styles.Glass}>
            <FaMagnifyingGlass />
        </span>
        <input className={styles.Input} type="search" />
        <button className={styles.Clear} type="button">
            <MdClear size={20} />
        </button>
    </div>
}

export default Search