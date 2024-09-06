import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          dolor numquam rerum velit voluptatum ab deserunt ea enim. Dicta eaque
          ipsam nemo reprehenderit, veritatis ipsa architecto quas molestias eos
          aspernatur!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1</li>
              <li className={styles.subitem}>2</li>
              <li className={styles.subitem}>3</li>
            </ul>
            <span className={styles.date}>Date</span>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1</li>
              <li className={styles.subitem}>2</li>
              <li className={styles.subitem}>3</li>
            </ul>
            <span className={styles.date}>Date</span>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Cap</h3>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>1</li>
              <li className={styles.subitem}>2</li>
              <li className={styles.subitem}>3</li>
            </ul>
            <span className={styles.date}>Date</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
