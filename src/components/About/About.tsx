import Image from "next/image";

import styles from "./About.module.scss";
import logo from "@/public/img/logo.png";

export default function About({ content }: any) {
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
          </div>
        </div>
      </div>
    </section>
  );
}
