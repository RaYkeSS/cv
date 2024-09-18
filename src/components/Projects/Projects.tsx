import Image from "next/image";
import { Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import styles from "./Projects.module.scss";
import logo from "@/public/img/logo.png";

export default function Projects({ content }: any) {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.text}>{content.descr}</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              width={200}
              height={200}
              src={logo}
              alt=""
              className={styles.img}
            />
            <div className={styles.item__wrapper}>
              <h3 className={styles.caption}>Cap</h3>
              <p className={styles.descr}>lorem</p>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>1 Tech</li>
                <li className={styles.subitem}>2 Tech</li>
                <li className={styles.subitem}>3 Tech</li>
              </ul>
              <Link>
                <OpenInNewIcon />
              </Link>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={200}
              height={200}
              src={logo}
              alt=""
              className={styles.img}
            />
            <div className={styles.item__wrapper}>
              <h3 className={styles.caption}>Cap</h3>
              <p className={styles.descr}>lorem</p>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>1 Tech</li>
                <li className={styles.subitem}>2 Tech</li>
                <li className={styles.subitem}>3 Tech</li>
              </ul>
              <Link>
                <OpenInNewIcon />
              </Link>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={200}
              height={200}
              src={logo}
              alt=""
              className={styles.img}
            />
            <div className={styles.item__wrapper}>
              <h3 className={styles.caption}>Cap</h3>
              <p className={styles.descr}>lorem</p>
              <ul className={styles.sublist}>
                <li className={styles.subitem}>1 Tech</li>
                <li className={styles.subitem}>2 Tech</li>
                <li className={styles.subitem}>3 Tech</li>
              </ul>
              <Link>
                <OpenInNewIcon />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
