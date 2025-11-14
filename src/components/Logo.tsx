import styles from "../styles/Logo.module.css"

type LogoProps = {
    fontSize?: string;
}

const Logo = ({ fontSize }: LogoProps): React.JSX.Element => {
    return <div className={styles.Logo} style={{ fontSize }}>Song River</div>
}

export default Logo