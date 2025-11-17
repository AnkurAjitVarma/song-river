import { type JSX } from "react";
import styles from "../styles/Search.module.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import useSearchNavigation from "../hooks/useSearchNavigation.tsx";

const Search = (): JSX.Element => {
    const { inputRef, handleSearchChange, handleClearSearch } = useSearchNavigation();
    return <div className={styles.Search}>
        <span className={styles.Glass}>
            <FaMagnifyingGlass />
        </span>
        <input ref={inputRef} className={styles.Input} type="search" onChange={handleSearchChange} />
        <button className={styles.Clear} type="button" onClick={handleClearSearch}>
            <MdClear size={20} />
        </button>
    </div>
}

export default Search