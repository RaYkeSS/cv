import Image from "next/image";

import styles from "./Skills.module.scss";

import jsIcon from "@public/img/skills/icon-javscript.svg";
import tsIcon from "@public/img/skills/icon-typescript.svg";
import reactIcon from "@public/img/skills/icon-react.svg";
import nextIcon from "@public/img/skills/icon-nextjs.svg";
import gitIcon from "@public/img/skills/icon-git.svg";
import sassIcon from "@public/img/skills/icon-sass.svg";
import twIcon from "@public/img/skills/icon-tailwindcss.svg";
import figmaIcon from "@public/img/skills/icon-figma.svg";

interface Content {
  title: string;
  descr: string;
}

interface SkillsProps {
  content: Content;
}

export default function Skills({ content }: SkillsProps) {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.text}>{content.descr}</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="JavaScript icon"
              src={jsIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>JavaScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="TypeScript icon"
              src={tsIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>TypeScript</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="React icon"
              src={reactIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>React</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="Next.js icon"
              src={nextIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Next.js</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="Git icon"
              src={gitIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Git</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="SCSS/Sass icon"
              src={sassIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>SCSS/Sass</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="Tailwind CSS icon"
              src={twIcon}
              width={64}
              height={64}
            />
            <span className={styles.descr}>Tailwind CSS</span>
          </li>
          <li className={styles.item}>
            <Image
              className={styles.img}
              alt="Figma icon"
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
