import styles from "../styles/Logo.module.css"
import type {JSX} from "react";

type LogoProps = {
    fontSize?: string;
}

const Logo = ({ fontSize }: LogoProps): JSX.Element => {
    return <div className={styles.Logo} style={{ fontSize }}>Song River</div>
}

export default Logo