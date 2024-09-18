import styles from "./Experience.module.scss";

interface Content {
  title: string;
  descr: string;
  items: Array<{
    caption: string;
    subcaption: string;
    subitems: string[];
    date: string;
  }>;
}

interface ExperienceProps {
  content: Content;
}

export default function Experience({ content }: ExperienceProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.text}>{content.descr}</p>
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
