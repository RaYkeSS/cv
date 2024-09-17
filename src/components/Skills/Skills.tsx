import Image from "next/image";

import styles from "./Skills.module.scss";

import jsIcon from "@/public/img/skills/icon-javscript.svg";
import tsIcon from "@/public/img/skills/icon-typescript.svg";
import reactIcon from "@/public/img/skills/icon-react.svg";
import nextIcon from "@/public/img/skills/icon-nextjs.svg";
import gitIcon from "@/public/img/skills/icon-git.svg";
import sassIcon from "@/public/img/skills/icon-sass.svg";
import twIcon from "@/public/img/skills/icon-tailwindcss.svg";
import figmaIcon from "@/public/img/skills/icon-figma.svg";

export default function Skills({ content }: any) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
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
              src={jsIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>JavaScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={tsIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>TypeScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={reactIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>React</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={nextIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Next.js</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={gitIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Git</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={sassIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>SCSS/Sass</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={twIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Tailwind CSS</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="logo"
              src={figmaIcon}
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
