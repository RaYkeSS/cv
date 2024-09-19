import Image from "next/image";

import styles from "./About.module.scss";
import logo from "@public/img/logo.png";

interface Content {
  title: string;
  caption: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

interface AboutProps {
  content: Content;
}

export default function About({ content }: AboutProps) {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.wrapper}>
          <Image
            className={styles.img}
            alt="logo"
            src={logo}
            width={250}
            height={250}
          />
          <div className={styles.wrapper__right}>
            <h3 className={styles.caption}>{content.caption}</h3>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <p>{content.text4}</p>
            <p>{content.text5}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
