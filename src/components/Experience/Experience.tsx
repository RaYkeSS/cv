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
            <h3 className={styles.caption}>Freelance</h3>
            <div className={styles.item__wrapper}>
              <h4 className={styles.subcaption}>Cap</h4>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione.
                </li>
              </ul>
            </div>
            <span className={styles.date}>June 2024 - September 2024</span>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Freelance</h3>
            <div className={styles.item__wrapper}>
              <h4 className={styles.subcaption}>Cap</h4>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione.
                </li>
              </ul>
            </div>
            <span className={styles.date}>June 2024 - September 2024</span>
          </li>
          <li className={styles.item}>
            <h3 className={styles.caption}>Freelance</h3>
            <div className={styles.item__wrapper}>
              <h4 className={styles.subcaption}>Cap</h4>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className={styles.subitem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione.
                </li>
              </ul>
            </div>
            <span className={styles.date}>June 2024 - September 2024</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
