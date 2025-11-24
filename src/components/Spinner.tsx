import type { JSX } from "react";
import styles from "../styles/Spinner.module.css"

type SpinnerProps = {
    size?: string,
    thickness?: string
}

const Spinner = ({
    size="20px",
    thickness="2px",
}: SpinnerProps): JSX.Element => {
    return <div className={styles.Spinner} style={{
        width: size,
        height: size,
        borderWidth: thickness
    }} />
}

export default Spinner;