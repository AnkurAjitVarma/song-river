import type { JSX } from "react";
import { getRouteApi, Link } from "@tanstack/react-router";
import styles from "../styles/SearchResults.module.css";
import type {Employee, LoaderData} from "../schemas/employeeSchema.tsx";

type EmployeeResultProps = {
    firstName: string;
    lastName: string;
    team: string;
    imageSrc: string;
}

const EmployeeResult = (props: EmployeeResultProps): JSX.Element => {
    return <div className={styles.Employee}>
        <div className={styles.Picture}>
            <img src={props.imageSrc} alt="Employee Picture" />
        </div>
        <div className={styles.Info}>
            <div className={styles.Name}>
                <span>{props.firstName}</span>
                <span>{props.lastName}</span>
            </div>
            <div className={styles.Team}>
                {props.team}
            </div>
        </div>
    </div>
}

const SearchResults = (): JSX.Element => {
    const route = getRouteApi('/')
    const results: LoaderData = route.useLoaderData()
    const { q } = route.useSearch();

    return <main>
        {
            results.length === 0 ?
                ( <p>No Results</p> ) :
                (
                    <div className={styles.SearchResults}>
                        <h3>{q === "" ? `All Employees (${results.length})` : `Search Results (${results.length})`}</h3>
                        <div className={styles.Table}>
                            {results.map((employee: Employee) => (
                                <Link key={employee.id}
                                    to="/employees/$employeeId"
                                    params={{ employeeId: employee.id.toString() }}
                                    className={styles.Link}>
                                    <EmployeeResult
                                        firstName={employee.firstName}
                                        lastName={employee.lastName}
                                        team={employee.teamName}
                                        imageSrc={employee.imageFilePath}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )
        }
    </main>
}

export default SearchResults;