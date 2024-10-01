import Card from "./Card/Card";
import styles from "./Projects.module.scss";

interface Card {
  caption: string;
  descr: string;
  tech: string[];
}

interface ProjectContent {
  title: string;
  descr: string;
  card1: Card;
  card2: Card;
  card3: Card;
}

interface ProjectsProps {
  content: ProjectContent;
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.text}>{content.descr}</p>
        <ul className={styles.list}>
          <Card content={content.card1} img={"cv"} link={"raykess.ru"} />
          <Card content={content.card2} img={"blank"} link={"raykess.ru"} />
          <Card content={content.card3} img={"blank"} link={"raykess.ru"} />
        </ul>
      </div>
    </section>
  );
}
