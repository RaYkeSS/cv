import Image from "next/image";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Hello</h1>
          <p className={styles.descr}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            pariatur. Officia pariatur alias perferendis rerum quis hic
            laboriosam expedita blanditiis ipsam, a cum et aliquid possimus
            aperiam enim nisi molestiae?
          </p>
          <span className={styles.text}>Rus</span>
          <span className={styles.text}>Avialable</span>
          <ul className={styles.media}>
            <li className={styles.media__item}>
              <a href="" className={styles.media__link}>
                Git
              </a>
            </li>
            <li className={styles.media__item}>
              <a href="" className={styles.media__link}>
                Soc
              </a>
            </li>
            <li className={styles.media__item}>
              <a href="" className={styles.media__link}>
                Soc
              </a>
            </li>
          </ul>
        </div>
        <Image
          className={styles.img}
          alt="logo"
          src="/img/logo.png"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
}
