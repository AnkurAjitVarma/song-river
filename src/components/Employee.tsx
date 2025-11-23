import styles from "../styles/Employee.module.css"
import { getRouteApi } from "@tanstack/react-router";
import type { JSX } from "react";
import type { Employee as EmployeeType } from "../schemas/employeeSchema.tsx";

const Employee = (): JSX.Element => {
    const employee: EmployeeType = getRouteApi('/employees/$employeeId').useLoaderData()
    return <article className={styles.Employee}>
            <div className={styles.Picture}>
                <img src={employee.imageFilePath} alt="Profile Picture" />
            </div>
            <div className={styles.Info}>
                <h1 className={styles.Name}>
                    <span className={styles.FirstName}>{employee.firstName}</span>
                    <span className={styles.LastName}>{employee.lastName}</span>
                </h1>
                <div className={styles.Designation}>
                    <span className={styles.Role}>{employee.jobTitle}</span>
                    <span className={styles.Team}>{employee.teamName}</span>
                </div>
            </div>
        </article>
}
export default Employee