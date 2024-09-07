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
          <div className={styles.wrapper__right}>
            <h3 className={styles.caption}>
              Curious about me? Here you have it:
            </h3>
            <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis! Atque, illum optio sit ex error aspernatur asperiores officia, iusto necessitatibus tenetur non quaerat magnam voluptate! Velit deleniti cumque asperiores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro vitae, placeat nobis ex dignissimos dolor mollitia cum id aliquam quam non a optio ab suscipit enim tenetur! Quod, eaque.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
