import styles from "../styles/Employee.module.css"
import {getRouteApi} from "@tanstack/react-router";

const Employee = (): React.JSX.Element => {
    const data = getRouteApi('/employees/$employeeId').useLoaderData()
    return <div className={styles.Employee}>
        <div className={styles.Picture}>
            <img src={`${data.imageFilePath}`}></img>
        </div>
        <div className={styles.Info}>
            <div className={styles.Name}>
                <span className={styles.FirstName}>{data.firstName}</span>
                <span className={styles.LastName}>{data.lastName}</span>
            </div>
            <div className={styles.Designation}>
                <span className={styles.Role}>{data.jobTitle}</span>
                <span className={styles.Team}>{data.teamName}</span>
            </div>
        </div>
    </div>
}

export default Employee