import Image from "next/image";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.wrapper}>
          <Image
            className={styles.img}
            alt="logo"
            src="/img/logo.png"
            width={250}
            height={250}
          />
          <div className={styles.wrapper__rigth}>
            <h3 className={styles.caption}>
              Curious about me? Here you have it:
            </h3>
            <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
}
