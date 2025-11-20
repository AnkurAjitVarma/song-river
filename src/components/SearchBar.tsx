import { type JSX } from "react";
import styles from "../styles/Search.module.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import useSearchNavigation from "../hooks/useSearchNavigation.tsx";

type SearchBarProps = {
    height?: string,
}

const SearchBar = ({ height }:SearchBarProps): JSX.Element => {
    const { onFocus, inputRef, handleSearchChange, handleClearSearch } = useSearchNavigation(100);
    return <div className={styles.Search} style={{height: height}} onFocus={onFocus}>
        <span className={styles.Glass}>
            <FaMagnifyingGlass />
        </span>
        <input ref={inputRef} className={styles.Input} type="search" onChange={handleSearchChange} />
        <button className={styles.Clear} type="button" onClick={handleClearSearch}>
            <MdClear size={20} />
        </button>
    </div>
}

export default SearchBar;