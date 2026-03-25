import type { JSX } from "react";
import type { Badge as BadgeDetails, Employee } from "../schemas/employeeSchema.tsx";
import styles from "../styles/Badges.module.css";
import { GrAdd } from "react-icons/gr";

const Badge = (props: BadgeDetails): JSX.Element => {
    return <figure className={styles.Badge}>
        <img src={props.imageFilePath} alt={props.name} />
        <figcaption>{props.name}</figcaption>
    </figure>
}

const AddBadge = (): JSX.Element => {
    return <div className={styles.Add}>
        <button type="button">
            <GrAdd size={20} />
        </button>
        <p>Add new badge</p>
    </div>
}

const Badges = (employee: Employee): JSX.Element => {
    const hasBadges = employee.badgeDetails.length > 0;

    return <section className={styles.Badges}>
        {hasBadges ? (
            <>
                <h1>Badges</h1>
                <ul>
                    {employee.badgeDetails.map((badge: BadgeDetails) => (
                        <li key={badge.name}>
                            <Badge {...badge} />
                        </li>
                    ))}
                    <li><AddBadge /></li>
                </ul>
            </>
        ) : (
            <>
                <p>No Badges Yet</p>
                <AddBadge />
            </>

        )}
    </section>
}

export default Badges;