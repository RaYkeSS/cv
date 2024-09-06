import Image from "next/image";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          dolor numquam rerum velit voluptatum ab deserunt ea enim. Dicta eaque
          ipsam nemo reprehenderit, veritatis ipsa architecto quas molestias eos
          aspernatur!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-javscript.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>JavaScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-typescript.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>TypeScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-react.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>React</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-nextjs.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>Next.js</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-git.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>Git</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-sass.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>SCSS/Sass</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-tailwindcss.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>Tailwind CSS</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src="/img/skills/icon-figma.svg"
              width={64}
              height={64}
            />
            <span className={styles.descr}>Figma</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
