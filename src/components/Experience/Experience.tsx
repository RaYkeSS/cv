import Card from "./Card/Card";

import styles from "./Experience.module.scss";

interface Card {
  card: Array<{
    place: string;
    caption: string;
    point1: string;
    point2: string;
    point3: string;
    date: string;
  }>;
}

interface Content {
  title: string;
  descr: string;
  card1: Card;
  card2: Card;
  card3: Card;
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
          <Card content={content.card1} />
          <Card content={content.card2} />
          <Card content={content.card3} />
        </ul>
      </div>
    </section>
  );
}
