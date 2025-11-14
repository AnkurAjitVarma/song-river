import styles from "../styles/Root.module.css";
import Header from "./Header.tsx";
import {Outlet} from "@tanstack/react-router";

const Root = (): React.JSX.Element => {
    return <div className={styles.Root}>
        <Header />
        <Outlet />
    </div>
}

export default Root;