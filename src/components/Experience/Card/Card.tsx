import styles from "./Card.module.scss";

export default function Card({ content }: any) {
  return (
    <li className={styles.item}>
      <h3 className={styles.caption}>{content.place}</h3>
      <div className={styles.item__wrapper}>
        <h4 className={styles.subcaption}>{content.caption}</h4>
        <ul className={styles.sublist}>
          {content.point1 && (
            <li className={styles.subitem}>{content.point1}</li>
          )}
          {content.point2 && (
            <li className={styles.subitem}>{content.point2}</li>
          )}
          {content.point3 && (
            <li className={styles.subitem}>{content.point3}</li>
          )}
        </ul>
      </div>
      <span className={styles.date}>{content.date}</span>
    </li>
  );
}