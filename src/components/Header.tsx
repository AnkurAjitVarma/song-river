import Logo from "./Logo.tsx"
import styles from "../styles/Header.module.css"

const Header = (): React.JSX.Element => {
    return <div className={styles.Header}>
        <Logo fontSize='3rem' />
        <h1 className={styles.Heading}>Employee Directory</h1>
    </div>
}

export default Header;