import Image from "next/image";
import { Button, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import styles from "./Card.module.scss";

interface ICard {
  caption: string;
  descr: string;
  tech: string[];
}

export default function Card({
  content,
  img,
  link,
  alt,
}: {
  content: ICard;
  img?: string;
  link: string;
  alt: string;
}) {
  return (
    <li className={styles.item}>
      {img && (
        <Button
          component={Link}
          href={link}
          target="_blank"
          color="inherit"
          className={styles.btn}
          aria-label="link to project"
        >
          <Image
            src={`/img/projects/${img}.png`}
            sizes="100vw"
            width={253.7}
            height={130.9}
            alt={alt}
            className={styles.img}
          />
        </Button>
      )}
      <div className={styles.item__wrapper}>
        <h3 className={styles.caption}>{content.caption}</h3>
        <p className={styles.descr}>{content.descr}</p>
        <ul className={styles.sublist}>
          {content.tech.map((value: string, index: number) => (
            <li key={index} className={styles.subitem}>
              {value}
            </li>
          ))}
        </ul>
        <Button
          component={Link}
          href={`https://${link}`}
          target="_blank"
          className={styles.btn__bottom}
          aria-label="link to project"
        >
          <OpenInNewIcon />
        </Button>
      </div>
    </li>
  );
}
