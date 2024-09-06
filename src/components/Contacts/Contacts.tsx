import { Link } from "@mui/material";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.text}>
          What’s next? Feel free to reach out to me if youre looking for a
          developer, have a query, or simply want to connect.
        </p>
        <Link>email</Link>
        <Link>num</Link>
        <span className={styles.descr}>Platforms</span>
        <ul className={styles.media}>
          <li className={styles.item}>
            <Link>Media</Link>
          </li>
          <li className={styles.item}>
            <Link>Media</Link>
          </li>
          <li className={styles.item}>
            <Link>Media</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
