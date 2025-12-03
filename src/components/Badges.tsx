import type { JSX } from "react";
import type { Badge as BadgeDetails, Employee } from "../schemas/employeeSchema.tsx";
import styles from "../styles/Badges.module.css";

const Badge = (props: BadgeDetails): JSX.Element => {
    return <figure className={styles.Badge}>
        <img src={props.imageFilePath} alt={props.name} />
        <figcaption>{props.name}</figcaption>
    </figure>
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
                </ul>
            </>
        ) : (
            <p>No Badges Yet</p>
        )}
    </section>
}

export default Badges;