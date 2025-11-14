import styles from "../styles/Employee.module.css"
import {getRouteApi} from "@tanstack/react-router";

const Employee = (): React.JSX.Element => {
    const data = getRouteApi('/employees/$employeeId').useLoaderData()
    return <div className={styles.Employee}>{JSON.stringify(data, null, 2)}</div>
}

export default Employee