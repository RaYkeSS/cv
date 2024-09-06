import { Link } from "@mui/material";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          dolor numquam rerum velit voluptatum ab deserunt ea enim. Dicta eaque
          ipsam nemo reprehenderit, veritatis ipsa architecto quas molestias eos
          aspernatur!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <p className={styles.descr}>lorem</p>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1 Tech</li>
              <li className={styles.subitem}>2 Tech</li>
              <li className={styles.subitem}>3 Tech</li>
            </ul>
            <Link>out</Link>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <p className={styles.descr}>lorem</p>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1 Tech</li>
              <li className={styles.subitem}>2 Tech</li>
              <li className={styles.subitem}>3 Tech</li>
            </ul>
            <Link>out</Link>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <p className={styles.descr}>lorem</p>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1 Tech</li>
              <li className={styles.subitem}>2 Tech</li>
              <li className={styles.subitem}>3 Tech</li>
            </ul>
            <Link>out</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
